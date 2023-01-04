import React, { useState } from "react";

interface IContextValue {
  username: string;
  shopping: { items: { id: number; name: string }[] }; //数组对象定义
}

//1.通过定义context要传入的默认值
const defaultContextValue: IContextValue = {
  username: "阿莱克斯",
  shopping: { items: [] }, //购物车数据
};

//2.通过创建React.createContext来创建context并导出
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<IContextValue>> | undefined
>(undefined); //传递修改的方法给孙组件可以调用

//3.自定义组件包裹
export const AppStateProvide: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
