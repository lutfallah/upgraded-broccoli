// app.js
function goToLogin() {
  alert("سيتم توجيهك إلى صفحة تسجيل الدخول 🔐 (لم يتم إنشاؤها بعد)");
  // لاحقًا: استبدال هذا بتحويل حقيقي للصفحة
}

function goToSignup() {
  alert("سيتم توجيهك إلى صفحة إنشاء حساب 📝 (لم يتم إنشاؤها بعد)");
}
let isLoginMode = true;

function toggleMode() {
  const button = document.querySelector("button");
  const toggleText = document.getElementById("toggleText");

  isLoginMode = !isLoginMode;

  if (isLoginMode) {
    button.textContent = "تسجيل الدخول";
    toggleText.textContent = "إنشاء حساب";
  } else {
    button.textContent = "إنشاء حساب";
    toggleText.textContent = "تسجيل الدخول";
  }
}

function submitForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("يرجى تعبئة جميع الحقول.");
    return;
  }

  if (isLoginMode) {
    alert(`محاولة تسجيل الدخول بـ: ${username}`);
    // لاحقًا: إضافة التحقق من الحساب
  } else {
    alert(`محاولة إنشاء حساب جديد بـ: ${username}`);
    // لاحقًا: حفظ الحساب في قاعدة البيانات
  }
}
function submitForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("يرجى تعبئة جميع الحقول.");
    return;
  }

  if (isLoginMode) {
    // التحقق الوهمي من الحساب
    const storedPass = localStorage.getItem("user_" + username);
    if (storedPass === password) {
      localStorage.setItem("currentUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("بيانات غير صحيحة أو الحساب غير موجود.");
    }
  } else {
    // إنشاء الحساب
    localStorage.setItem("user_" + username, password);
    localStorage.setItem("currentUser", username);
    localStorage.setItem("score_" + username, 0);
    window.location.href = "dashboard.html";
  }
}
