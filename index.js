export const confirm = function (text, title, onConfirm = () => {}) {
  if (typeof title === "function") {
    onConfirm = title;
    title = undefined;
  }
  const ConfirmCtor = Vue.extend(Confirm);
  const getInstance = () => {
    if (!instanceCache) {
      instanceCache = new ConfirmCtor({
        propsData: {
          text,
          title,
          onConfirm,
        },
      });
      // 生成dom
      instanceCache.$mount();
      document.body.appendChild(instanceCache.$el);
    } else {
      // 更新属性
      instanceCache.text = text;
      instanceCache.title = title;
      instanceCache.onConfirm = onConfirm;
    }
    return instanceCache;
  };
  const instance = getInstance();
  // 确保更新的prop渲染到dom
  // 确保动画效果
  Vue.nextTick(() => {
    instance.visible = true;
  });
};