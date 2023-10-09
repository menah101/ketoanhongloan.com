const postCreate = async (data) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/posts',
      data
    });
    if (res.data.status === 'success') {
      alert('Tạo Post thành công!')
      window.setTimeout(() => {
        location.assign('/admin/post/');
      }, 500);
    }
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
  }
};


document.querySelector('.js-form-post-create')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = new FormData();

  form.append('thumbnail', document.querySelector('.js-upload-file').files[0]);
  form.append('title', document.getElementById('postTitleCreate').value);
  form.append('tag', document.getElementById('postTagCreate').value);
  form.append('description', document.getElementById('postDescriptionCreate').value);
  form.append('metaDescription', document.getElementById('postMetaDescriptionCreate').value);
  form.append('metaKeywords', document.getElementById('postMetaKeywordsCreate').value);
  form.append('author', document.getElementById('postAuthorCreate').value);
  form.append('content', document.querySelector('.ql-editor').innerHTML)
  postCreate(form);
});