type Item = {
  id: string;
};

//This means the TItem is a veriable datatype which consiste the type of "id : " (compelsory)
//which means it is any array of [{ id: "1", test: "sdf" }, { id: "2" }];
//but [{ test: "sdf" }, { tes: "2" }]; //error - missing of id
// objective of this function is that Identify the Item with specific id so that we can aligne it in specific list
export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id);
};

export const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertItemAtIndex = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

/**
 * [1,2,3,4,5,6,7] - array
 * from ; 2
 * to: 5
 * item = array[2] ; //item = 3
 * insertItemAtindex (removeItematindex(array,2),item,to)
 * removeItematindex (array,2) => ([1,2],[4,5,6,7]) => [1,2,4,5,6,7]
 * insertItemAtindex([1,2,4,5,6,7],3,5) => ([1,2,4,5,6],3,[7]) =>[1,2,4,5,6,3,7]
 *
 */
export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

//THis function help in changing the possition of any array from to to
