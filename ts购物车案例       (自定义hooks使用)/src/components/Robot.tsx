import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState"; //引入爷组件的context
import { useHooks } from "./useHooks"; //自定义hook

//接受App传过来的每一个props
export interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  //useContext可以接受index.tsx传过来的props---跨组件传
  const value = useContext(appContext);

  //使用自定义hooks
  const addToCard = useHooks();

  //不使用useContext方法
  // return (
  //   <appContext.Consumer>
  //     {(value) => {
  //       return (
  //         <div className={styles.cardContainer}>
  //           <img alt="robot" src={`https://robohash.org/${id}`} />
  //           <h2>{name}</h2>
  //           <p>{email}</p>
  //           <p>作者：{value.username}</p>
  //         </div>
  //       );
  //     }}
  //   </appContext.Consumer>
  // );

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCard(id, name)}>加入购物车</button>
    </div>
  );
};

export default Robot;
