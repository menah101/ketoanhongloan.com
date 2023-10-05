const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    
    console.log(res);
    if (res.data.status === 'success') {
      alert('Đăng nhập thành công!')
      window.setTimeout(() => {
        location.assign('/admin');
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
    console.log(err);
  }
};

document.querySelector('.js-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});