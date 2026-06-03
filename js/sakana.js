

//设置sakana状态
// 设定静音
Sakana.setMute(false);

// 获取静音状态
const { isMute } = Sakana.Voices;

// 启动
const sakana = Sakana.init({
  // 选项: 默认值
  el:         '.sakana-box',     // 启动元素 node 或 选择器
  character:  'chisato',          // 启动角色 'chisato','takina' 
  inertia:    0.05,              // 惯性
  decay:      0.92,              // 衰减
  r:          60,                // 启动角度
  y:          10,                // 启动高度
  scale:      0.5,                 // 缩放倍数
  translateY: 0,                 // 位移高度
  canSwitchCharacter: true,     // 允许换角色
  onSwitchCharacter(character){  // 切换角色回调
    console.log(`${character} dayo~`);
  },
});

// 设定归零角度
sakana.setOriginRotate(10);

// 获取角色运行状态
const v = sakana.getValue();

// 确保运行
sakana.confirmRunning();

// 切换角色
sakana.switchCharacter();

// 暂停动作
sakana.pause();

// 恢复动作
sakana.play();

// 切换特定角色
sakana.setCharacter('chisato');