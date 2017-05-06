var movieAPI = (function (oldDom) {
  $('#add-todo-button').click(() => {
    	let newMovie = {
    		isCompleted: false,
    		task: $('#add-todo-text').val()
    	};
      if(editId.length > 0){
        //edit
        FbApi.editTodo(apiKeys, newTodo, editId).then(() => {
          $('#add-todo-text').val("");
          editId = "";
          $('.new-container').addClass('hide');
          $('.list-container').removeClass('hide');
          FbApi.writeDom(apiKeys);
        }).catch((error) => {
          console.log("addTodo error", error);
        });
      } else{
        FbApi.addTodo(apiKeys, newTodo).then(() => {
          $('#add-todo-text').val("");
          $('.new-container').addClass('hide');
          $('.list-container').removeClass('hide');
          FbApi.writeDom(apiKeys);
        }).catch((error) => {
          console.log("addTodo error", error);
        });      
      }
    });

    return oldDom;
})(movieAPI || {});