import React from 'react';
import '../CSS/CmtList.css'
export default class CmtItem extends React.Component{
    render(){
        return <div className='box'>
            <h1 className='person'>评论人:{this.props.user}</h1>
             <p className='content'>评论内容:{this.props.content}</p>
        </div>
    }
}
