import React, { memo, useState } from 'react';
import { ICON_PATH } from 'constant';
import { ComplexObject } from 'types';
import { copyDeep, showAlert } from 'utils';
import { Btn, Card, CenterWrapper, Circle, TriangleCard, Txt } from 'components';
import createAction, { actions } from 'store/actions';
import { useHitAction } from 'hooks';
import InputRow from '../common/InputRow';
import TitleRow from '../common/TtitleRow';
import RenderOtherSuperVisors from './RenderOtherSuperVisors';

function NewProject(): JSX.Element {
  const hitAction = useHitAction();

  const TEMPLATE_DETAILS = {
    fullName: '',
    phone: '',
    address: '',
  };

  const [contractorDetails, setContractorDetails] = useState<ComplexObject>(TEMPLATE_DETAILS);
  const [ownerDetails, setOwnerDetails] = useState<ComplexObject>(TEMPLATE_DETAILS);
  const [otherSupervisorsInfo, setOtherSupervisorsInfo] = useState<ComplexObject[]>([]);
  const [projectInfo, setProjectInfo] = useState<ComplexObject>({
    name: '',
    fileNo: '',
    address: '',
    contractDate: '',
    areaSize: 0,
  });

  const handleProjectInputs = () => {
    let tempProject = copyDeep<ComplexObject>('obj', projectInfo); // deep copy for improving performance
    return (str, target) => {
      tempProject[target] = str;
      setProjectInfo(tempProject);
    };
  };

  const handleContractorInfo = () => {
    let tempContractor = copyDeep<ComplexObject>('obj', contractorDetails);
    return (str, target) => {
      tempContractor[target] = str;
      setContractorDetails(tempContractor);
    };
  };

  const handleOwnerInfo = () => {
    let tempOwner = copyDeep<ComplexObject>('obj', ownerDetails); // deep copy for improving performance
    return (str, target) => {
      tempOwner[target] = str;
      setOwnerDetails(tempOwner);
    };
  };

  //--boosting performance by preventing reinitialize local vars
  const updateProjectInfo = handleProjectInputs();
  const updateContractorInfo = handleContractorInfo();
  const updateOwnerInfo = handleOwnerInfo();

  const saveProject = () => {
    if (projectInfo.name) {
      hitAction(
        createAction(actions.WATCH_CREATE_PROJECT, {
          projectInfo,
          contractorDetails,
          ownerDetails,
          otherSupervisorsInfo,
        })
      );
    } else hitAction(showAlert('err', 'لطفا نام پروژه را وارد کنید'));
  };

  return (
    <CenterWrapper id="new-project">
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <Circle title="پروژه جدید" icon={ICON_PATH + 'new-projects.svg'} iconSize="60px" />
        <TriangleCard hasBorder={true} bgColor="CARD_BG" borderColor="BRIGHT_BORDER" className="my-0 w-100 h-100 p-2">
          <TitleRow src="project-details.svg" title="مشخصات پروژه جدید" />
          <InputRow onChange={(e) => updateProjectInfo(e.target.value, 'name')} title="نام پروژه" />
          <InputRow
            type="number"
            onChange={(e) => updateProjectInfo(e.target.value, 'fileNo')}
            title="شماره پرونده شهرداری"
          />
          <InputRow onChange={(e) => updateProjectInfo(e.target.value, 'address')} title="آدرس" />
          <InputRow
            onChange={(e) => updateProjectInfo(e.target.value, 'contractDate')}
            title="تاریخ عقد قرارداد نظارت"
          />
          <InputRow type="number" onChange={(e) => updateProjectInfo(e.target.value, 'areaSize')} title="متراژ بنا" />
          {/*<UploadBtn doAfterUpload={() => {}} title="بارگذاری نقشه، جواز و سایر مستندات" />*/}
        </TriangleCard>
      </Card>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <TriangleCard hasBorder={true} bgColor="CARD_BG" borderColor="BRIGHT_BORDER" className="my-0 w-100 h-100 p-2">
          <TitleRow src="owner-details.svg" title="مشخصات مجری" />
          <InputRow onChange={(e) => updateContractorInfo(e.target.value, 'fullName')} title="نام و نام خانوادگی" />
          <InputRow type="tel" onChange={(e) => updateContractorInfo(e.target.value, 'phone')} title="تلفن" />
          <InputRow onChange={(e) => updateContractorInfo(e.target.value, 'address')} title="آدرس" />
          {/*<UploadBtn doAfterUpload={() => {}} title="بارگذاری تصویر پروانه مجری" />*/}
        </TriangleCard>
      </Card>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <TriangleCard hasBorder={true} bgColor="CARD_BG" borderColor="BRIGHT_BORDER" className="my-0 w-100 h-100 p-2">
          <TitleRow src="owner-details.svg" title="مشخصات مالک" />
          <InputRow onChange={(e) => updateOwnerInfo(e.target.value, 'fullName')} title="نام و نام خانوادگی" />
          <InputRow type="tel" onChange={(e) => updateOwnerInfo(e.target.value, 'phone')} title="تلفن" />
          <InputRow onChange={(e) => updateOwnerInfo(e.target.value, 'address')} title="آدرس" />
        </TriangleCard>
      </Card>
      <RenderOtherSuperVisors
        otherSupervisorsInfo={otherSupervisorsInfo}
        setOtherSupervisorsInfo={setOtherSupervisorsInfo}
      />
      <div className="d-flex justify-content-end m-2">
        <Btn childWrapperClass="px-3" hasIcon={false} bgColor="GREEN" onClick={saveProject} width="120px" grDir="left">
          <Txt color="WHITE">ثبت</Txt>
        </Btn>
      </div>
    </CenterWrapper>
  );
}
export default memo(NewProject);
