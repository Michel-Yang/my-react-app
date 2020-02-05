import React from 'react';
export default class CmtItem extends React.Component{
    render(){
        return <div>
            <h1>评论人:{this.props.user}</h1>
             <p>评论内容:{this.props.content}</p>
        </div>
    }
}
