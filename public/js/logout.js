const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) {
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    console.log(err.response);
    alert('Error logging out! Try again.');
  }
};

document.querySelector('.js-logout')?.addEventListener('click', logout);