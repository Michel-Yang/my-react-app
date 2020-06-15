import React from 'react';
import '../css/Comment.css'
/* 评论组件 
 * 填写评论内容
 * 提交评论内容
 * */
export default class Comment extends React.Component{
	state={
        text:''  
    }
    txtChange=(e)=>{
        this.setState({
            text:e.target.value
        });
    }
    submit=()=>{
        var obj={
            id:6,
            user:"中国",
            content:this.state.text
        }
        this.props.submit(obj)

    }
    render(){
        return  <div className='comment'>
        <input type="text" value={this.state.text} onChange={this.txtChange} ></input>
        <button onClick={this.submit}> 提交</button>
    </div>
    }
}
