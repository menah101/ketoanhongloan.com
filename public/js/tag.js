const tagCreate = async (name, description) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/tags',
      data: {
        name,
        description
      }
    });
    if (res.data.status === 'success') {
      alert('Tạo Tag thành công!')
      window.setTimeout(() => {
        location.assign('/admin/tag/');
      }, 500);
    }
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
  }
};

const tagEdit = async (name, slug, description, id) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/tags/${id}`,
      data: {
        name,
        slug,
        description
      }
    });
    
    if (res.data.status === 'success') {
      alert('Cập nhật Tag thành công!')
      window.setTimeout(() => {
        location.assign('/admin/tag/');
      }, 500);
    }
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
  }
};

const tagDelete = async (id) => {
  try {
    let textConfirm = 'Bạn có muốn xóa!\nNhấn OK or Cancel.';
    if (confirm(textConfirm) == true) {
      textConfirm = 'You pressed OK!';
      const res = await axios({
        method: 'DELETE',
        url: `/api/v1/tags/${id}`
      });

      if (res.status === 204) {
        alert('Xóa Tag thành công!')
        window.setTimeout(() => {
          location.assign('/admin/tag/');
        }, 500);
      }
    } else {
      textConfirm = 'You canceled!';
    }
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
  }
};

document.querySelector('.js-form-tag-edit')?.addEventListener('submit', e => {
  e.preventDefault();
  const id = document.getElementById('tagIdEdit').value;
  const name = document.getElementById('tagNameEdit').value;
  const slug = document.getElementById('tagSlugEdit').value;
  const description = document.getElementById('tagDescriptionEdit').value;
  tagEdit(name, slug, description, id);
});

document.querySelector('.js-form-tag-create')?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('tagNameCreate').value;
  const description = document.getElementById('tagDescriptionCreate').value;
  tagCreate(name, description);
});