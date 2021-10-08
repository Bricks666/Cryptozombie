export const errorsHandler = (e) => {
  switch (e.code) {
    case 4001: {
      alert("Транзакция была отклонена");
      break;
    }
    case -1: {
      alert(`Выход за допустимые пределы, ${e.message}`);
      break;
    }
    default: {
      alert(
        `Произошла ошибка, пожалуйста, попробуйте позже или обратитесь в поддержку ${e.message}`
      );
    }
  }
};
