const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["image"],

  ["clean"],
];

const elementQuill = document.getElementById("editorCreate");
let quill;
if (elementQuill) {
  quill = new Quill(elementQuill, {
    theme: "snow",
    modules: {
      toolbar: toolbarOptions,
    },
  });
}

const postCreate = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/posts",
      data,
    });
    if (res.data.status === "success") {
      alert("Tạo Post thành công!");
      window.setTimeout(() => {
        location.assign("/admin/post/");
      }, 500);
    }
  } catch (err) {
    console.log(err.response);
    alert(err.response.data.message);
  }
};

document.querySelector(".js-form-post-create")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData();
  const delta = quill.getContents();
  form.append("thumbnail", document.querySelector(".js-upload-file").files[0]);
  form.append("title", document.getElementById("postTitleCreate").value);
  form.append("tag", document.getElementById("postTagCreate").value);
  form.append("description", document.getElementById("postDescriptionCreate").value);
  form.append("metaDescription", document.getElementById("postMetaDescriptionCreate").value);
  form.append("metaKeywords", document.getElementById("postMetaKeywordsCreate").value);
  form.append("author", document.getElementById("postAuthorCreate").value);
  form.append("content", JSON.stringify(delta.ops));
  postCreate(form);
});