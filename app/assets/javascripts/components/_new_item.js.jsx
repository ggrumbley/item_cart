var NewItem = React.createClass({
  handleClick() {
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let data = { item: { name: name, description: description } };

     $.ajax({
       url: '/api/v1/items',
       type: 'POST',
       data: data,
       success: (item) => {
          console.log(item);
         this.props.handleSubmit(item);
       }
     });

    //  fetch('api/v1/items', {
    //    credentials: 'include',
    //    method: 'POST',
    //    headers: {
    //      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    //    },
    //    body: data
    //  })
    //  .then((res) => { return res.json(); })
    //  .then((text) => { console.log(text);});

  },
  render() {
    return (
      <div>
        <h1>New Item</h1>

        <input ref='name' placeholder='Enter the name of item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
})
