import { Card, Modal, Txt } from 'components';
import { generateFileUrl } from 'utils';
import { ComplexObject } from 'types';

interface Props {
  showDocs: boolean;
  setShowDocs: Function;
  data: ComplexObject;
  projectDocList: any[];
}

export default function RenderDocs({ showDocs, setShowDocs, data, projectDocList }: Props) {
  return (
    <Modal hasClose bgColor="TRANSPARENT" isOpen={showDocs} doOnClose={setShowDocs}>
      <Card className="p-2" bgColor="CARD_BG" borderRadius="s">
        <Txt size="s" className="my-2 text-center" isBold>
          اسناد پروژه {data?.proName || ''}
        </Txt>
        {projectDocList.map((item, i) => (
          <a
            className="my-1"
            key={i}
            target="_blank"
            download={item.fileName}
            href={generateFileUrl(item.imageUrl, 'files')}
          >
            <Txt size="xs">{i + 1 + '- ' + item.fileName}</Txt>
          </a>
        ))}
      </Card>
    </Modal>
  );
}
