import React, { memo, useEffect, useState } from 'react';
import { ComplexObject } from 'types';
import { Card, CenterWrapper, Circle, HyperLink, ListRenderer, TriangleCard, Txt } from 'components';
import { ICON_PATH } from 'constant/index';
import { generateFileUrl } from 'utils/index';
import { StyledBook, StyledImg } from 'views/rules/RulesBookBankStyle';
import useGetBooks from 'api/requests/misc/use-get-books';

function RulesBookBank(): JSX.Element {
  const [books, setBooks] = useState<ComplexObject[]>([]);
  const { data, status } = useGetBooks();

  useEffect(() => {
    if (data) setBooks(data);
  }, [data]);

  return (
    <CenterWrapper>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <Circle title="قوانین" icon={ICON_PATH + 'rules-bank.svg'} iconSize="60px" />
        <TriangleCard hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-2">
          <Txt isBold className="d-block text-center title-font">
            بانک قوانین اطلاعات و کتب مهندسی
          </Txt>
          <StyledBook>
            <ListRenderer status={status}>
              {books?.map((book) => (
                <HyperLink href={generateFileUrl(book.link, 'files')} className="center-items flex-column mb-3">
                  <StyledImg src={generateFileUrl(book.cover, 'files')} alt={book.name} />
                  <Txt className="one-line-text" isBold size="xxs">
                    {book.name}
                  </Txt>
                </HyperLink>
              ))}
            </ListRenderer>
          </StyledBook>
        </TriangleCard>
      </Card>
    </CenterWrapper>
  );
}

export default memo(RulesBookBank);
