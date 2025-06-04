export type UseActionButtonsReturn = {
  handleClickDelete: () => void;
};

export const useActionButtons = (
  onClickDelete: () => void
): UseActionButtonsReturn => {
  function handleClickDelete() {
    if (window.confirm('本当に削除しますか？')) {
      onClickDelete();
    }
  }

  return {
    handleClickDelete,
  };
};
