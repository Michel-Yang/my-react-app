import React from 'react';
import '../CSS/CmtItem.css'
/* 评论项组件 
 * 渲染评论人和评论内容
 * 接收参数 用户名 评论内容
 * */
export default class CmtItem extends React.Component{
    render(){
        return <div className='box'>
            <h1 className='person'>评论人:{this.props.user}</h1>
            <p className='content'>评论内容:{this.props.content}</p>
        </div>
    }
}
