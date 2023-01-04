/**
 * 为了让多个重复组件能够简化业务逻辑，使用高阶组件
 */

import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

//高阶组件--参数是组件名，类型是React.ComponentType
export const withHoc = (ChildComponent: React.ComponentType<RobotProps>) => {
  //返回一个类组件
  // return class extends React.Component{}

  //返回一个函数组件
  return (props) => {
    //封装重复组件的业务逻辑
    const setState = useContext(appSetStateContext); //获取修改的方法

    //加入购物车方法
    const addToCard = (id, name) => {
      if (setState) {
        //将原来数据添加，新增新数据
        setState((state) => {
          return {
            ...state,
            shopping: {
              items: [...state.shopping.items, { id, name }],
            },
          };
        });
      }
    };

    return <ChildComponent {...props} addToCard={addToCard}></ChildComponent>;
  };
};
