/**
 * 这是一个自定义hooks，用来封装购物车逻辑
 */
import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";

export const useHooks = () => {
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
  return addToCard;
};
