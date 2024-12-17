import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import { getBase64, showAlert } from 'utils';
import { Btn, Card, FileSelectBtn, Txt } from 'components';
import createAction, { actions } from 'store/actions';
import { seSt } from 'services';
import RenderDocs from './RenderDocs';

enum DETAIL_KEYS {
  proName = 'نام پروژه',
  proAddress = 'آدرس پروژه',
  proNumber = 'شماره پروژه',
  proSpace = 'مساحت ملک',
  builderName = 'نام مجری',
  proDate = 'تاریخ پروژه',
  builderMobile = 'تلفن مجری',
  builderAddress = 'آدرس مجری',
  landownerName = 'نام مالک',
  landownerMobile = 'تلفن مالک',
  landownerAddress = 'آدرس مالک',
}

export default function TableItem(itemProps) {
  const { data, editAble, i } = itemProps;
  const hitAction = useHitAction();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showDocs, setShowDocs] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [projectItem, setProjectItem] = useState<ComplexObject>(data);
  const [projectDocList, setProjectDocList] = useState<any[]>([]);
  const router = useRouter();

  const grabDocs = () => {
    hitAction(
      createAction(actions.GET_DOCS, {
        id: projectItem.projectID,
        cb: setProjectDocList,
      })
    );
  };

  const RenderDetails = () =>
    Object.entries(projectItem).map(([key, value]) => (
      <Txt size="xs">{typeof value === 'string' && key !== 'proName' ? DETAIL_KEYS[key] + ': ' + value : null}</Txt>
    ));

  const pickFileAndUpload = async (file) => {
    try {
      hitAction(
        file.size > 5_120_000
          ? showAlert('err', 'حجم فایل باید کمتر از 5 مگابایت باشد')
          : createAction(actions.UPLOAD_DOC, {
              id: projectItem.projectID,
              content: await getBase64(file),
              fileName: file.name,
            })
      );
    } catch (e) {
      console.log(e, ` <---err in pickFileAndUpload ----`);
    }
  };

  const updateProjectDetails = () => {
    hitAction(
      createAction(actions.WATCH_UPDATE_PROJECT, {
        updatedProject: projectItem,
      })
    );
  };

  const deleteProject = () => {
    hitAction(
      createAction(actions.WATCH_DELETE_PROJECT, {
        id: projectItem.projectID,
      })
    );
  };

  const goToLastAction = () => {
    const { proStep } = projectItem;
    seSt.remove('projectID');
    seSt.set('projectID', projectItem.projectID);
    if (proStep && router.pathname !== proStep) router.push(proStep);
  };

  const finishProject = () => {
    hitAction(
      createAction(actions.FINISH_PROJECT, {
        info: projectItem,
      })
    );
  };

  useEffect(grabDocs, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>نام پروژه</th>
            <th>اسناد</th>
            <th>جزئیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                onChange={(e) => setProjectItem({ ...projectItem, proName: e.target.value })}
                className="border-0 bg-transparent w-75"
                disabled={!isEditing}
                defaultValue={data.proName}
              />
            </td>
            <td className="pointer" onClick={() => setShowDocs(true)}>
              مشاهده
            </td>
            <td className="pointer" onClick={() => setShowDetails(!showDetails)}>
              مشاهده
            </td>
          </tr>
        </tbody>
      </table>
      {/*@ts-ignore*/}
      {showDetails ? <RenderDetails /> : null}
      <Card className="center-items justify-content-between flex-wrap">
        <Btn hasArrow={false} hasIcon={false} textColor="RED" bgColor="TRANSPARENT" width="25%" onClick={deleteProject}>
          × حذف
        </Btn>
        {editAble ? (
          <>
            <FileSelectBtn
              onSelect={pickFileAndUpload}
              component={
                <Btn
                  hasArrow={false}
                  hasIcon={false}
                  textColor="BLACK"
                  bgColor="TRANSPARENT"
                  width="100%"
                  className="pointer text-left small"
                >
                  + سند
                </Btn>
              }
            />
            <Btn
              hasArrow={false}
              hasIcon={false}
              textColor="ORANGE"
              bgColor="TRANSPARENT"
              width="25%"
              onClick={() => (isEditing ? updateProjectDetails() : setIsEditing(true))}
            >
              {isEditing ? 'ثبت ' : 'ویرایش'}
            </Btn>

            <Btn
              hasArrow={false}
              hasIcon={false}
              textColor="GREEN"
              bgColor="TRANSPARENT"
              width="25%"
              onClick={finishProject}
            >
              پایان
            </Btn>
            {projectItem?.proStep ? (
              <Btn
                hasArrow={false}
                hasIcon={false}
                textColor="PRIMARY_TEXT"
                bgColor="TRANSPARENT"
                onClick={goToLastAction}
              >
                آخرین اقدام
              </Btn>
            ) : null}
          </>
        ) : null}
      </Card>
      <RenderDocs setShowDocs={setShowDocs} showDocs={showDocs} data={data} projectDocList={projectDocList} />
    </>
  );
}
