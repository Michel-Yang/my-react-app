import React from 'react';
import '../CSS/CmtItem.css'
/* 评论项组件 
 * 渲染评论人和评论内容
 * 接收参数 用户名 评论内容
 * */
export default class CmtItem extends React.Component{
	delEvent=()=>{
		this.props.delItem(this.props.index);
		//console.log(11111)
	}
    render(){
        return <div className='box'>
             <div className='left'>
            <h1 className='person'>评论人:{this.props.user}</h1>
            <p className='content'>评论内容:{this.props.content}</p>
            </div>
            <div className='right'>
              <button className='del' onClick={this.delEvent}>删除</button>
            </div>
        </div>
    }
}
