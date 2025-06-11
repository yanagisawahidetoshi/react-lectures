---
marp: true
theme: default
paginate: true
---

# 🎓 Propsを減らす

---

## 1. React.Context

---

## 2. ZustandやReduxなどの状態管理ライブラリ

---

## 3. Compound Components

## Compound Components（複合コンポーネント）パターンは、関連するコンポーネントをグループ化し、内部状態を共有するデザインパターン。

## https://tyotto-good.com/react/compound-component

```
<Select options={options} onChange={handleChange}/>
```

```
const Select = ({options, onChange}) => {
  <select onChange={onChange}>
    {options.map(v => {
      return <option value={v}>{v}</v>
    })}
  </select>
}
```

---

```
<Select>
   {options.map(v => {
      return <Option value={v} />
    })}
</Select>
```

---

```
const Select = ({children, onChange}) => {
  <select onChange={onChange}>
   {children}
  </select>
}
```

---

```
const Option = ({v}) => {
  return <option value={v}>{v}</option>
}

```

## 4. 複数の関連するpropsを単一のオブジェクトにまとめる

---

```
export type {
  Todo : {
    id: number,
    title: string,
    isChecked: boolean
  }
}
```

---

## 5. state管理の設計

---

```
import { useState } from 'react';
import { ToDo } from '../../../types';
import { ActionButtons } from '../ActionButtons';
import { EditableItem } from '../EditableItem';

export type Props = {
  todo: ToDo;
  onSubmitEdit: (id: number, title: string) => void;
  onClickDelete: (id: number) => void;
  isChecked: boolean;
  onChangeCompleted: ({
    id,
    isChecked,
  }: {
    id: number;
    isChecked: boolean;
  }) => void;
};

export const ToDoItem: React.FC<Props> = ({
  todo,
  onClickDelete,
  onSubmitEdit,
  isChecked,
  onChangeCompleted,
}) => {
  const [editingTitle, setEditingTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);

  function handleClickEdit() {
    setIsEdit(true);
  }

  function handleEditSubmit() {
    setIsEdit(false);
    onSubmitEdit(todo.id, editingTitle);
  }

  function handleCancelEdit() {
    setIsEdit(false);
    setEditingTitle(todo.title);
  }

  return (
    <>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) =>
            onChangeCompleted({
              id: todo.id,
              isChecked: e.target.checked,
            })
          }
        />
      </td>
      <td>{todo.id}</td>
      <td>
        <EditableItem
          value={editingTitle}
          onChangeInput={(v) => setEditingTitle(v)}
          isEdit={isEdit}
        />
      </td>
      <td>{todo.isCompleted ? '完了' : '未完了'}</td>
      <td>{todo.createdAt}</td>
      <td>
        <ActionButtons
          onClickDelete={() => onClickDelete(todo.id)}
          onClickEdit={handleClickEdit}
          isEdit={isEdit}
          onClickEditCancel={handleCancelEdit}
          onClickEditSubmit={handleEditSubmit}
        />
      </td>
    </>
  );
};
```

---
