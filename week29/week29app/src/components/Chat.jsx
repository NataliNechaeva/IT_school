import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import './Chat.scss';



const { TextArea } = Input;

const CommentList = ({ comments }, style) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} className="color"/>}
    
  />
);

const Editor = ({ onChange, onSubmit, submitting, value, style }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} style={style} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class Chat extends React.Component {

  state = {
    comments: [],
    submitting: false,
    value: '',
    style: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    };

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        style: {backgroundColor: 'beige'},
        comments: [
          ...this.state.comments,
          {
            author: 'Anonymous',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{this.state.value.replace(/(viagra|bnm)/ig, "***")}</p>,
          },
          ],       
      });        
    }, 1000);        
  };
    

  handleChange = e => {
     this.setState({
      value: e.target.value,
    });
    
  };

  render() {
    const { comments, submitting, value, style} = this.state;
    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor 
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
              style={style}
            />
          }
        />
      </>
    );
  }
}

export default Chat;