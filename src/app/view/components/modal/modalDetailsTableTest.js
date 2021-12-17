import elementCreator from '../../../utils/elementCreator';

// nadajemy styl odpowiedzi
function chooseStyleAndAnswer(round) {
  // sprawdzamy czy coś jest funkcją
  if (!round) {
    return ['', ''];
  }
  // jeśli coś jest funkcją przypisujemy styl
  return round.isCorrect
    ? [round.answer, 'details__table__answer--correct']
    : [round.answer, 'details__table__answer--incorrect'];
}

// funkcja robi tabelkę w modalu
function ModalDetailsTable(quiz, humanData, computerData) {
  // tutaj jest tablica zawieracjąca dane o rozgrywce
  // pytanie - co jest w paths?
  const {
    humanAnswers,
    computerAnswers,
    rightAnswers,
    paths,

    // tutaj użyta jest funkcja, któa przygotowuje dane do Tabeli
    // zawart jest w innym pliku
  } = prepareDataForDetailsTable(quiz, humanData, computerData);

  // tutaj przygotoewane są rządki odpowiedzi -z robiona jest iteracja po tablicy
  // rightAnswers iyta zostaje funkcja która wybiera nadaje styl odpowiedzi
  const answersRows = rightAnswers.map((rightAnswer, index) => {
    const [humanAnswer, humanStyle] = chooseStyleAndAnswer(humanAnswers[index]);
    // tutaj stylowania jest odpowiedz komputera - to nam jest niepotrzebne
    const [computerAnswer, computerStyle] = chooseStyleAndAnswer(
      computerAnswers[index],
    );
    // tutaj stworzone jest zdjęcie
    const imageToInsert = elementCreator('img', {
      src: paths[index],
    });

    // tutaj stworzona jest komórka w której jest zdjęcie
    const newImageCell = elementCreator(
      'td',
      {
        className: 'details__table__image',
      },
      imageToInsert,
    );
    // tutaj stworzona jest komórka w której jest odpowiedz gracza
    const newHumanAnswer = elementCreator(
      'td',
      humanStyle === '' ? {} : { className: humanStyle },
      humanAnswer,
    );
    // komórka w której jest odpowiedz komputera
    const newComputerAnswer = elementCreator(
      'td',
      computerStyle === '' ? {} : { className: computerStyle },
      computerAnswer,
    );
    // komórka w której jest poprawna odpowiedz
    const newCorrectAnswer = elementCreator(
      'td',
      {
        className: 'details__table__answer',
      },
      rightAnswer,
    );
    // nowy wiersz
    const newRow = elementCreator(
      'tr',
      {},
      newImageCell,
      newHumanAnswer,
      newComputerAnswer,
      newCorrectAnswer,
    );
    return newRow;
  });

  // TABLE BODY
  // to tujaj łączą się wszystkie <tr> w jedno tbody
  const tableBody = elementCreator(
    'tbody',
    {
      className: 'details__table__body',
    },
    ...answersRows, // łączenie elementow razem
  );

  // JOIN TOGETHER
  // nazwy nagłówków tabeli
  const tableHeaders = ['', 'You', 'Computer', 'Answer'];
  const tableHeadersElements = tableHeaders.map((header) => {
    const tableHeader = elementCreator(
      'th',
      {
        className: 'details__table__head',
      },
      header,
    );
    return tableHeader;
  });
  const tableHeadRow = elementCreator('tr', {}, ...tableHeadersElements);

  const tableHead = elementCreator('thead', {}, tableHeadRow);
  const newTable = elementCreator(
    'table',
    {
      className: 'details__table',
    },
    tableHead,
    tableBody,
  );

  return newTable;
}

export default ModalDetailsTable;
