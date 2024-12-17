import React from 'react';
import { Card, Txt, TriangleCard } from 'components';
import { ComplexObject } from 'types';
import { copyDeep } from 'utils';
import TitleRow from 'views/projects/common/TtitleRow';
import InputRow from 'views/projects/common/InputRow';

interface Props {
    otherSupervisorsInfo: ComplexObject[];
    setOtherSupervisorsInfo: Function;
}

export default function RenderOtherSuperVisors(props: Props): JSX.Element {
    const { otherSupervisorsInfo, setOtherSupervisorsInfo } = props;

    const addNewSuperVisor = () => {
        let tempSupervisors = copyDeep<ComplexObject[]>('arr', otherSupervisorsInfo); // deep copy for improving performance
        tempSupervisors.push({
            name: '',
            number: '',
            address: '',
        });
        setOtherSupervisorsInfo(tempSupervisors);
    };

    const removeSuperVisor = (i) => {
        let tempSupervisors = copyDeep<ComplexObject[]>('arr', otherSupervisorsInfo); // deep copy for improving performance
        tempSupervisors.splice(i, i);
        setOtherSupervisorsInfo(tempSupervisors);
    };

    const handleOtherSupervisors = () => {
        let tempInfos = copyDeep<ComplexObject[]>('arr', otherSupervisorsInfo); // deep copy for improving performance
        return (str, target, i) => {
            tempInfos[i][target] = str;
            setOtherSupervisorsInfo(tempInfos);
        };
    };

    const updateData = handleOtherSupervisors(); // deep copy for improving performance

    return (
        <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
            <TriangleCard
                hasBorder={true}
                bgColor="CARD_BG"
                borderColor="BRIGHT_BORDER"
                className="my-0 w-100 h-100 p-2"
            >
                <div className="center-items justify-content-between">
                    <TitleRow src="4-green-contractor.svg" title="مشخصات سایر ناظرین" />
                    <Txt className="pointer" isBold size="xs" onClick={addNewSuperVisor}>
                        + افزودن ناظر
                    </Txt>
                </div>
                {otherSupervisorsInfo.map((item, i) => (
                    <React.Fragment key={'item' + i}>
                        {i > 0 ? (
                            <div className="center-items justify-content-between mt-2 mb-1 pointer">
                                <Txt isBold size="xs">{`ناظر شماره ${i + 1}:`}</Txt>
                                <Txt
                                    onClick={() => removeSuperVisor(i)}
                                    color="RED"
                                    isBold
                                    size="xs"
                                >
                                    حذف
                                </Txt>
                            </div>
                        ) : null}
                        <InputRow
                            onChange={(e) => updateData(e.target.value, 'name', i)}
                            title="نام و نام خانوادگی"
                        />
                        <InputRow
                            type="tel"
                            onChange={(e) => updateData(e.target.value, 'number', i)}
                            title="تلفن"
                        />
                        <InputRow
                            onChange={(e) => updateData(e.target.value, 'address', i)}
                            title="آدرس"
                        />
                    </React.Fragment>
                ))}
            </TriangleCard>
        </Card>
    );
}
