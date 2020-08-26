const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left(null));

// const openSite = () => {
//   if(current_user) {
//     return renderPage(current_user)
//   } else {
//     return showLogin()
//   }
// }

const openSite = () => {
  fromNullable(current_user).fold(showLogin, renderPage);
};

// const getPrefs = user => {
//   if (user.premium) {
//     return loadPrefs(user.preferences)
//   } else {
//     return defaultPrefs
//   }
// }

const getPrefs = (user) =>
  (user.premium ? Right(user) : Left("not premium"))
    .map((u) => u.preferences)
    .fold(
      () => defaultStatus,
      (prefs) => loadPrefs(prefs)
    );
