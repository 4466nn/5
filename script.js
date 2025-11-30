        // 更新时间和日期
        function updateDateTime() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            const dateStr = now.toLocaleDateString('zh-CN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            });
            
            document.getElementById('currentTime').textContent = timeStr;
            document.getElementById('lockTime').textContent = timeStr;
            document.getElementById('lockDate').textContent = dateStr;
        }
        
        // 初始更新时间
        updateDateTime();
        setInterval(updateDateTime, 60000);
        
        // 应用数据
        const appData = {
            messages: {
                title: "信息",
                content: `
                    <div class="page-title">信息</div>
                    <div class="page-subtitle">最近对话</div>
                    <div class="message-list">
                        <div class="notification">
                            <div class="notification-icon icon-messages"></div>
                            <div class="notification-content">
                                <div class="notification-title">张三</div>
                                <div class="notification-text">你好！今天下午的会议别忘了。</div>
                                <div class="notification-time">刚刚</div>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-icon icon-messages"></div>
                            <div class="notification-content">
                                <div class="notification-title">李四</div>
                                <div class="notification-text">项目文件已经发你邮箱了</div>
                                <div class="notification-time">昨天</div>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-icon icon-messages"></div>
                            <div class="notification-content">
                                <div class="notification-title">王五</div>
                                <div class="notification-text">周末一起吃饭吗？</div>
                                <div class="notification-time">周二</div>
                            </div>
                        </div>
                    </div>
                `
            },
            phone: {
                title: "电话",
                content: `
                    <div class="page-title">电话</div>
                    <div class="page-subtitle">最近通话</div>
                    <div class="message-list">
                        <div class="notification">
                            <div class="notification-icon icon-phone"></div>
                            <div class="notification-content">
                                <div class="notification-title">张三</div>
                                <div class="notification-text">手机 · 昨天</div>
                                <div class="notification-time">已拨电话</div>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-icon icon-phone"></div>
                            <div class="notification-content">
                                <div class="notification-title">李四</div>
                                <div class="notification-text">手机 · 周一</div>
                                <div class="notification-time">未接来电</div>
                            </div>
                        </div>
                    </div>
                    <div class="keypad" style="margin-top: 30px;">
                        <div class="keypad-row">
                            <button class="control-icon"><span style="font-size: 20px;">1</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">2</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">3</span></button>
                        </div>
                        <div class="keypad-row" style="margin-top: 15px;">
                            <button class="control-icon"><span style="font-size: 20px;">4</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">5</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">6</span></button>
                        </div>
                        <div class="keypad-row" style="margin-top: 15px;">
                            <button class="control-icon"><span style="font-size: 20px;">7</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">8</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">9</span></button>
                        </div>
                        <div class="keypad-row" style="margin-top: 15px;">
                            <button class="control-icon"><span style="font-size: 20px;">*</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">0</span></button>
                            <button class="control-icon"><span style="font-size: 20px;">#</span></button>
                        </div>
                        <div class="keypad-row" style="margin-top: 15px; justify-content: center;">
                            <button class="control-icon" style="width: 150px; background: var(--primary); color: white;">
                                <i class="fas fa-phone" style="font-size: 20px;"></i>
                            </button>
                        </div>
                    </div>
                `
            },
            camera: {
                title: "相机",
                content: `
                    <div class="page-title">相机</div>
                    <div class="page-subtitle">拍照和录像</div>
                    <div class="camera-view" style="width: 100%; height: 400px; background: #333; border-radius: var(--radius-medium); margin: 20px 0; display: flex; align-items: center; justify-content: center; color: white;">
                        <i class="fas fa-camera" style="font-size: 50px;"></i>
                    </div>
                    <div style="display: flex; justify-content: center; gap: 30px; margin-top: 20px;">
                        <div class="control-icon"><i class="fas fa-sync-alt"></i></div>
                        <div class="control-icon" style="width: 70px; height: 70px; background: white; border: 3px solid #ddd;"><i class="fas fa-circle" style="color: #ff4757;"></i></div>
                        <div class="control-icon"><i class="fas fa-images"></i></div>
                    </div>
                `
            },
            photos: {
                title: "相册",
                content: `
                    <div class="page-title">相册</div>
                    <div class="page-subtitle">所有照片</div>
                    
                    <div class="photo-grid" id="photoGrid">
                        <!-- 照片将动态生成 -->
                    </div>
                `
            },
            settings: {
                title: "设置",
                content: `
                    <div class="page-title">设置</div>
                    <div class="page-subtitle">系统设置</div>
                    <div class="message-list">
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">WLAN</div>
                                <div class="setting-desc">已连接至 Home-WiFi</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">蓝牙</div>
                                <div class="setting-desc">已开启</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">通知与状态栏</div>
                                <div class="setting-desc">管理通知显示</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">声音与振动</div>
                                <div class="setting-desc">铃声音量、振动模式</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item" id="displayBrightnessItem">
                            <div class="setting-info">
                                <div class="setting-title">显示与亮度</div>
                                <div class="setting-desc">亮度、护眼模式、壁纸</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">全屏模式</div>
                                <div class="setting-desc">开启全屏显示</div>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="fullscreenToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">使用内置浏览器</div>
                                <div class="setting-desc">链接应用使用内置浏览器打开</div>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="useBuiltinBrowserToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="setting-item" id="appManagementItem">
                            <div class="setting-info">
                                <div class="setting-title">应用管理</div>
                                <div class="setting-desc">管理已安装应用</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">添加链接应用</div>
                                <div class="setting-desc">添加网页应用到桌面</div>
                            </div>
                            <button class="add-app-btn" id="addAppBtn">
                                <i class="fas fa-plus"></i>
                                <span>添加</span>
                            </button>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">密码与安全</div>
                                <div class="setting-desc">指纹、面部识别</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                    </div>
                `
            },
            appManagement: {
                title: "应用管理",
                content: `
                    <div class="page-title">应用管理</div>
                    <div class="page-subtitle">管理已安装的应用</div>
                    
                    <div class="app-management-grid" id="appManagementGrid">
                        <!-- 应用管理项目将动态生成 -->
                    </div>
                `
            },
            displayBrightness: {
                title: "显示与亮度",
                content: `
                    <div class="page-title">显示与亮度</div>
                    <div class="page-subtitle">屏幕显示设置</div>
                    <div class="message-list">
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">亮度</div>
                                <div class="setting-desc">调整屏幕亮度</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">自动亮度</div>
                                <div class="setting-desc">根据环境光自动调整</div>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="autoBrightnessToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">护眼模式</div>
                                <div class="setting-desc">减少蓝光辐射</div>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="eyeProtectionToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="setting-item" id="wallpaperSettingItem">
                            <div class="setting-info">
                                <div class="setting-title">壁纸</div>
                                <div class="setting-desc">设置桌面壁纸</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">字体大小</div>
                                <div class="setting-desc">调整系统字体大小</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <div class="setting-title">显示大小</div>
                                <div class="setting-desc">调整屏幕显示比例</div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-tertiary);"></i>
                        </div>
                    </div>
                `
            },
            wallpaper: {
                title: "壁纸设置",
                content: `
                    <div class="page-title">壁纸设置</div>
                    <div class="page-subtitle">选择或上传壁纸</div>
                    
                    <!-- 文件上传区域 -->
                    <div class="file-upload" id="wallpaperUpload">
                        <div class="file-upload-icon">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div class="file-upload-text">
                            <div>点击上传壁纸</div>
                            <div style="font-size: 12px; margin-top: 5px;">支持 JPG、PNG 格式</div>
                        </div>
                        <input type="file" class="file-input" id="wallpaperFileInput" accept="image/*">
                    </div>
                    
                    <div class="page-title" style="margin-top: 30px;">我的壁纸</div>
                    <div class="wallpaper-grid" id="wallpaperGrid">
                        <!-- 壁纸项目将动态生成 -->
                    </div>
                `
            }
        };
        
        // 链接应用存储
        let linkApps = JSON.parse(localStorage.getItem('linkApps')) || [];
        
        // 多任务应用堆栈 - 修复：确保所有打开的应用都能显示
        let appStack = JSON.parse(localStorage.getItem('appStack')) || [];
        
        // 壁纸存储
        let wallpapers = JSON.parse(localStorage.getItem('wallpapers')) || [];
        let currentWallpaper = localStorage.getItem('currentWallpaper') || '';
        
        // 照片存储
        let photos = JSON.parse(localStorage.getItem('photos')) || [];
        
        // 应用启动动画系统
        let appLaunchAnimation = null;
        let appLaunchInterrupted = false;
        
        // 手势状态
        let gestureStartY = 0;
        let gestureStartX = 0;
        let gestureZoneStart = false;
        let multitaskGestureActive = false;
        let returnGestureActive = false;
        let homeGestureActive = false;
        
        // 系统设置
        let systemSettings = JSON.parse(localStorage.getItem('systemSettings')) || {
            useBuiltinBrowser: true,
            darkMode: false
        };

        // 暗色模式状态
        let isDarkMode = systemSettings.darkMode || false;
        
        // 初始化链接应用
        function initLinkApps() {
            const appGrid = document.getElementById('appGrid');
            
            // 移除现有的链接应用
            document.querySelectorAll('.app-icon[data-app^="link-"]').forEach(icon => {
                icon.remove();
            });
            
            linkApps.forEach(app => {
                const appIcon = document.createElement('div');
                appIcon.className = 'app-icon';
                appIcon.setAttribute('data-app', `link-${app.id}`);
                
                const appIconBg = document.createElement('div');
                if (app.iconUrl) {
                    appIconBg.className = 'link-app-icon';
                    appIconBg.style.backgroundImage = `url(${app.iconUrl})`;
                } else {
                    appIconBg.className = 'app-icon-bg';
                    appIconBg.innerHTML = '<i class="fas fa-globe"></i>';
                }
                
                const appName = document.createElement('span');
                appName.className = 'app-name';
                appName.textContent = app.name;
                
                appIcon.appendChild(appIconBg);
                appIcon.appendChild(appName);
                appGrid.appendChild(appIcon);
                
                // 添加点击事件
                appIcon.addEventListener('click', function() {
                    launchLinkApp(app);
                });
            });
        }

        // 初始化应用管理页面
        function initAppManagement() {
            const appManagementGrid = document.getElementById('appManagementGrid');
            appManagementGrid.innerHTML = '';
            
            // 添加原生应用
            const nativeApps = [
                { id: 'messages', name: '信息', icon: 'icon-messages' },
                { id: 'phone', name: '电话', icon: 'icon-phone' },
                { id: 'camera', name: '相机', icon: 'icon-camera' },
                { id: 'photos', name: '相册', icon: 'icon-photos' },
                { id: 'weather', name: '天气', icon: 'icon-weather' },
                { id: 'maps', name: '地图', icon: 'icon-maps' },
                { id: 'calendar', name: '日历', icon: 'icon-calendar' },
                { id: 'notes', name: '笔记', icon: 'icon-notes' },
                { id: 'settings', name: '设置', icon: 'icon-settings' }
            ];
            
            nativeApps.forEach(app => {
                const appItem = document.createElement('div');
                appItem.className = 'app-management-item';
                
                const appIcon = document.createElement('div');
                appIcon.className = `app-icon-bg ${app.icon}`;
                
                const appName = document.createElement('span');
                appName.className = 'app-name';
                appName.textContent = app.name;
                
                const appActions = document.createElement('div');
                appActions.className = 'app-management-actions';
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'app-management-action';
                deleteBtn.textContent = '卸载';
                deleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // 这里可以添加卸载逻辑
                    showHint('系统应用无法卸载');
                });
                
                appActions.appendChild(deleteBtn);
                
                appItem.appendChild(appIcon);
                appItem.appendChild(appName);
                appItem.appendChild(appActions);
                
                appManagementGrid.appendChild(appItem);
            });
            
            // 添加链接应用
            linkApps.forEach(app => {
                const appItem = document.createElement('div');
                appItem.className = 'app-management-item';
                
                const appIcon = document.createElement('div');
                if (app.iconUrl) {
                    appIcon.className = 'link-app-icon';
                    appIcon.style.backgroundImage = `url(${app.iconUrl})`;
                } else {
                    appIcon.className = 'app-icon-bg';
                    appIcon.innerHTML = '<i class="fas fa-globe"></i>';
                }
                
                const appName = document.createElement('span');
                appName.className = 'app-name';
                appName.textContent = app.name;
                
                const appActions = document.createElement('div');
                appActions.className = 'app-management-actions';
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'app-management-action';
                deleteBtn.textContent = '删除';
                deleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    deleteLinkApp(app.id);
                });
                
                appActions.appendChild(deleteBtn);
                
                appItem.appendChild(appIcon);
                appItem.appendChild(appName);
                appItem.appendChild(appActions);
                
                appManagementGrid.appendChild(appItem);
            });
        }

        // 初始化壁纸系统
        function initWallpaperSystem() {
            // 应用当前壁纸
            if (currentWallpaper) {
                document.body.classList.add('custom-wallpaper');
                document.body.style.backgroundImage = `url(${currentWallpaper})`;
            }
            
            // 初始化壁纸设置页面
            initWallpaperPage();
            
            // 初始化相册页面
            initPhotosPage();
        }

        // 初始化壁纸页面
        function initWallpaperPage() {
            const wallpaperGrid = document.getElementById('wallpaperGrid');
            wallpaperGrid.innerHTML = '';
            
            // 添加默认壁纸
            
            const defaultWallpapers = [
                                         { id: 'default2', name: '默壁2', url: 'https://img0.baidu.com/it/u=418049484,2283998428&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1203' },
                                                { id: 'default2', name: '默认壁2', url: 'https://img1.baidu.com/it/u=1308042325,3970153189&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1194' },
                                                                { id: 'default2', name: '默认壁纸2', url: 'https://img0.baidu.com/it/u=1477644508,2507717076&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1333' },
                   { id: 'default1', name: '默认壁纸1', url: 'https://img2.baidu.com/it/u=3594210183,3555429012&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1423' },
                { id: 'default2', name: '默认壁纸2', url: 'https://img2.baidu.com/it/u=1787284653,2331900063&fm=253&fmt=auto&app=138&f=JPEG?w=886&h=500' },
                { id: 'default3', name: '默认纸3', url: 'https://pic.netbian.com/uploads/allimg/251002/214613-1759412773cb82.jpg' }
                
            ];
            
            // 添加默认壁纸
            defaultWallpapers.forEach(wallpaper => {
                const wallpaperItem = document.createElement('div');
                wallpaperItem.className = 'wallpaper-item';
                
                const wallpaperImage = document.createElement('img');
                wallpaperImage.className = 'wallpaper-image';
                wallpaperImage.src = wallpaper.url;
                wallpaperImage.alt = wallpaper.name;
                
                const wallpaperActions = document.createElement('div');
                wallpaperActions.className = 'wallpaper-actions';
                
                const setBtn = document.createElement('button');
                setBtn.className = 'wallpaper-action';
                setBtn.textContent = '设为壁纸';
                setBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    setWallpaper(wallpaper.url);
                });
                
                wallpaperActions.appendChild(setBtn);
                
                wallpaperItem.appendChild(wallpaperImage);
                wallpaperItem.appendChild(wallpaperActions);
                
                wallpaperGrid.appendChild(wallpaperItem);
            });
            
            // 添加用户上传的壁纸
            wallpapers.forEach(wallpaper => {
                const wallpaperItem = document.createElement('div');
                wallpaperItem.className = 'wallpaper-item';
                
                const wallpaperImage = document.createElement('img');
                wallpaperImage.className = 'wallpaper-image';
                wallpaperImage.src = wallpaper.url;
                wallpaperImage.alt = wallpaper.name;
                
                const wallpaperActions = document.createElement('div');
                wallpaperActions.className = 'wallpaper-actions';
                
                const setBtn = document.createElement('button');
                setBtn.className = 'wallpaper-action';
                setBtn.textContent = '设为壁纸';
                setBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    setWallpaper(wallpaper.url);
                });
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'wallpaper-action';
                deleteBtn.textContent = '删除';
                deleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    deleteWallpaper(wallpaper.id);
                });
                
                wallpaperActions.appendChild(setBtn);
                wallpaperActions.appendChild(deleteBtn);
                
                wallpaperItem.appendChild(wallpaperImage);
                wallpaperItem.appendChild(wallpaperActions);
                
                wallpaperGrid.appendChild(wallpaperItem);
            });
            
            // 初始化文件上传
            const fileInput = document.getElementById('wallpaperFileInput');
            const uploadArea = document.getElementById('wallpaperUpload');
            
            uploadArea.addEventListener('click', function() {
                fileInput.click();
            });
            
            fileInput.addEventListener('change', function(e) {
                if (e.target.files.length > 0) {
                    uploadWallpaper(e.target.files[0]);
                }
            });
        }

        // 初始化相册页面
        function initPhotosPage() {
            const photoGrid = document.getElementById('photoGrid');
            photoGrid.innerHTML = '';
            
            photos.forEach(photo => {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                
                const photoImage = document.createElement('img');
                photoImage.className = 'photo-image';
                photoImage.src = photo.url;
                photoImage.alt = '用户照片';
                
                photoItem.appendChild(photoImage);
                photoGrid.appendChild(photoItem);
            });
        }

        // 上传壁纸
        function uploadWallpaper(file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const newWallpaper = {
                    id: Date.now().toString(),
                    name: file.name,
                    url: e.target.result,
                    timestamp: new Date().toISOString()
                };
                
                wallpapers.push(newWallpaper);
                localStorage.setItem('wallpapers', JSON.stringify(wallpapers));
                
                // 同时添加到相册
                photos.push({
                    id: Date.now().toString() + '_photo',
                    url: e.target.result,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('photos', JSON.stringify(photos));
                
                // 更新UI
                initWallpaperPage();
                initPhotosPage();
                
                showHint('壁纸上传成功');
            };
            
            reader.readAsDataURL(file);
        }

        // 设置壁纸
        function setWallpaper(url) {
            currentWallpaper = url;
            localStorage.setItem('currentWallpaper', url);
            
            document.body.classList.add('custom-wallpaper');
            document.body.style.backgroundImage = `url(${url})`;
            
            showHint('壁纸设置成功');
        }

        // 删除壁纸
        function deleteWallpaper(id) {
            wallpapers = wallpapers.filter(wallpaper => wallpaper.id !== id);
            localStorage.setItem('wallpapers', JSON.stringify(wallpapers));
            
            // 如果删除的是当前壁纸，恢复默认
            if (currentWallpaper && wallpapers.find(w => w.id === id)?.url === currentWallpaper) {
                currentWallpaper = '';
                localStorage.removeItem('currentWallpaper');
                document.body.classList.remove('custom-wallpaper');
                document.body.style.backgroundImage = '';
            }
            
            // 更新UI
            initWallpaperPage();
            
            showHint('壁纸已删除');
        }

        // 删除链接应用
        function deleteLinkApp(appId) {
            linkApps = linkApps.filter(app => app.id !== appId);
            localStorage.setItem('linkApps', JSON.stringify(linkApps));
            
            // 同时从应用堆栈中移除
            appStack = appStack.filter(app => app.id !== `link-${appId}`);
            localStorage.setItem('appStack', JSON.stringify(appStack));
            
            // 更新UI
            initLinkApps();
            initAppManagement();
            updateMultitaskView();
            
            showHint('应用已删除');
        }
        
        // 启动链接应用
        function launchLinkApp(app) {
            document.getElementById('appTitle').textContent = app.name;
            
            if (systemSettings.useBuiltinBrowser) {
                // 使用内置浏览器
                document.getElementById('appContent').innerHTML = `
                    <div class="page-title">${app.name}</div>
                    <div class="page-subtitle">网页应用</div>
                    <iframe src="${app.url}" style="width: 100%; height: 100%; border: none; border-radius: var(--radius-medium);"></iframe>
                `;
            } else {
                // 使用外部浏览器
                document.getElementById('appContent').innerHTML = `
                    <div class="page-title">${app.name}</div>
                    <div class="page-subtitle">网页应用</div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 20px;">
                        <i class="fas fa-external-link-alt" style="font-size: 60px; color: var(--primary);"></i>
                        <h3>外部浏览器打开</h3>
                        <p>将在外部浏览器中打开: ${app.url}</p>
                        <button class="btn btn-primary" onclick="window.open('${app.url}', '_blank')">打开链接</button>
                    </div>
                `;
            }
            
            document.getElementById('appWindow').classList.add('active');
            
            // 添加到应用堆栈
            addToAppStack({
                id: `link-${app.id}`,
                title: app.name,
                type: 'link'
            });
        }
        
        // 添加到应用堆栈 - 修复：确保所有打开的应用都能显示
        function addToAppStack(app) {
            // 如果应用已经在堆栈中，先移除
            appStack = appStack.filter(item => item.id !== app.id);
            appStack.push(app);
            
            // 保存到本地存储
            localStorage.setItem('appStack', JSON.stringify(appStack));
            
            // 更新多任务视图
            updateMultitaskView();
        }
        
        // 更新多任务视图 - 修复：显示所有打开过的应用
        function updateMultitaskView() {
            const multitaskCardStack = document.getElementById('multitaskCardStack');
            multitaskCardStack.innerHTML = '';
            
            // 显示所有应用，不只是最近3个
            const recentApps = [...appStack].reverse(); // 反转数组以显示最近打开的应用在前面
            
            recentApps.forEach((app, index) => {
                const appCard = document.createElement('div');
                appCard.className = 'stacked-card';
                if (index === 0) {
                    appCard.classList.add('active');
                }
                
                // 根据应用数量调整位置
                const totalApps = recentApps.length;
                const maxOffset = Math.min(120, (totalApps - 1) * 40);
                const offset = index * (maxOffset / (totalApps - 1)) - maxOffset / 2;
                
                if (index === 0) {
                    appCard.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
                } else {
                    appCard.style.transform = `translateX(${offset}px) rotateY(${offset > 0 ? 10 : -10}deg) scale(0.9)`;
                }
                
                const appCardHeader = document.createElement('div');
                appCardHeader.className = 'stacked-card-header';
                
                // 根据应用类型设置图标
                if (app.type === 'link') {
                    appCardHeader.innerHTML = '<i class="fas fa-globe"></i>';
                } else {
                    const iconClass = `icon-${app.id}`;
                    appCardHeader.className += ` ${iconClass}`;
                }
                
                const appCardFooter = document.createElement('div');
                appCardFooter.className = 'stacked-card-footer';
                appCardFooter.textContent = app.title;
                
                appCard.appendChild(appCardHeader);
                appCard.appendChild(appCardFooter);
                
                appCard.addEventListener('click', function() {
                    // 从多任务界面打开应用，带有过渡动画
                    openAppFromMultitask(app);
                });
                
                multitaskCardStack.appendChild(appCard);
            });

            // 添加滑动事件
            initMultitaskSwipe();
        }

        // 初始化多任务滑动
        function initMultitaskSwipe() {
            const cards = document.querySelectorAll('.stacked-card');
            let startX = 0;
            let currentX = 0;
            let isSwiping = false;

            cards.forEach(card => {
                card.addEventListener('touchstart', function(e) {
                    startX = e.touches[0].clientX;
                    isSwiping = true;
                });

                card.addEventListener('touchmove', function(e) {
                    if (!isSwiping) return;
                    
                    currentX = e.touches[0].clientX;
                    const diffX = currentX - startX;
                    
                    // 限制滑动范围
                    if (Math.abs(diffX) > 50) {
                        this.style.transform = `translateX(${diffX}px) rotateY(${diffX > 0 ? 10 : -10}deg)`;
                    }
                });

                card.addEventListener('touchend', function(e) {
                    if (!isSwiping) return;
                    
                    const diffX = currentX - startX;
                    
                    // 如果滑动距离足够，切换到下一个应用
                    if (Math.abs(diffX) > 100) {
                        const cards = Array.from(document.querySelectorAll('.stacked-card'));
                        const currentIndex = cards.indexOf(this);
                        const nextIndex = diffX > 0 ? 
                            (currentIndex + 1) % cards.length : 
                            (currentIndex - 1 + cards.length) % cards.length;
                        
                        // 移除当前激活状态
                        cards.forEach(card => card.classList.remove('active'));
                        // 激活下一个卡片
                        cards[nextIndex].classList.add('active');
                        
                        // 更新卡片位置
                        updateCardPositions(cards, nextIndex);
                    } else {
                        // 恢复原位
                        const currentIndex = cards.indexOf(this);
                        updateCardPositions(cards, currentIndex);
                    }
                    
                    isSwiping = false;
                    startX = 0;
                    currentX = 0;
                });
            });
        }

        // 更新卡片位置
        function updateCardPositions(cards, activeIndex) {
            const totalApps = cards.length;
            const maxOffset = Math.min(120, (totalApps - 1) * 40);
            
            cards.forEach((card, index) => {
                const offset = (index - activeIndex) * (maxOffset / (totalApps - 1));
                
                if (index === activeIndex) {
                    card.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
                } else {
                    card.style.transform = `translateX(${offset}px) rotateY(${offset > 0 ? 10 : -10}deg) scale(0.9)`;
                }
            });
        }
        
        // 从多任务界面打开应用
        function openAppFromMultitask(app) {
            // 显示过渡动画
            const transition = document.getElementById('appTransition');
            const transitionIcon = document.getElementById('appTransitionIcon');
            
            // 设置过渡动画图标
            if (app.type === 'link') {
                transitionIcon.innerHTML = '<i class="fas fa-globe"></i>';
            } else {
                const iconClass = `icon-${app.id}`;
                transitionIcon.className = `app-transition-icon ${iconClass}`;
            }
            
            transition.classList.add('active');
            
            // 隐藏多任务界面
            document.getElementById('multitaskView').classList.remove('active');
            
            // 短暂延迟后打开应用
            setTimeout(() => {
                if (app.type === 'link') {
                    const linkApp = linkApps.find(link => `link-${link.id}` === app.id);
                    if (linkApp) {
                        launchLinkApp(linkApp);
                    }
                } else {
                    launchAppFromStack(app.id);
                }
                
                // 隐藏过渡动画
                setTimeout(() => {
                    transition.classList.remove('active');
                }, 300);
            }, 500);
        }
        
        // 从应用堆栈移除应用
        function removeFromAppStack(appId) {
            appStack = appStack.filter(app => app.id !== appId);
            localStorage.setItem('appStack', JSON.stringify(appStack));
            updateMultitaskView();
            
            // 如果移除的是当前应用，关闭应用窗口
            if (appStack.length === 0 || appStack[appStack.length-1].id !== appId) {
                document.getElementById('appWindow').classList.remove('active');
            }
        }
        
        // 从堆栈启动应用
        function launchAppFromStack(appId) {
            if (appData[appId]) {
                document.getElementById('appTitle').textContent = appData[appId].title;
                document.getElementById('appContent').innerHTML = appData[appId].content;
                document.getElementById('appWindow').classList.add('active');
                
                // 如果是设置应用，初始化设置开关
                if (appId === 'settings') {
                    const fullscreenToggle = document.getElementById('fullscreenToggle');
                    fullscreenToggle.checked = document.body.classList.contains('fullscreen-mode');
                    fullscreenToggle.addEventListener('change', toggleFullscreenMode);
                    
                    const builtinBrowserToggle = document.getElementById('useBuiltinBrowserToggle');
                    builtinBrowserToggle.checked = systemSettings.useBuiltinBrowser;
                    builtinBrowserToggle.addEventListener('change', toggleBuiltinBrowser);
                    
                    // 初始化添加应用按钮
                    document.getElementById('addAppBtn').addEventListener('click', showAddAppDialog);

                    // 初始化应用管理项
                    document.getElementById('appManagementItem').addEventListener('click', openAppManagement);
                    
                    // 初始化显示与亮度项
                    document.getElementById('displayBrightnessItem').addEventListener('click', openDisplayBrightness);
                }
                
                // 如果是显示与亮度应用
                if (appId === 'displayBrightness') {
                    // 初始化壁纸设置项
                    document.getElementById('wallpaperSettingItem').addEventListener('click', openWallpaperSettings);
                }
                
                // 如果是壁纸应用
                if (appId === 'wallpaper') {
                    initWallpaperPage();
                }
                
                // 如果是相册应用
                if (appId === 'photos') {
                    initPhotosPage();
                }
            }
        }

        // 打开应用管理
        function openAppManagement() {
            document.getElementById('appManagementWindow').classList.add('active');
            initAppManagement();
        }

        // 关闭应用管理
        function closeAppManagement() {
            document.getElementById('appManagementWindow').classList.remove('active');
        }

        // 打开显示与亮度
        function openDisplayBrightness() {
            document.getElementById('appTitle').textContent = appData.displayBrightness.title;
            document.getElementById('appContent').innerHTML = appData.displayBrightness.content;
            
            // 初始化壁纸设置项
            document.getElementById('wallpaperSettingItem').addEventListener('click', openWallpaperSettings);
        }

        // 打开壁纸设置
        function openWallpaperSettings() {
            document.getElementById('wallpaperWindow').classList.add('active');
        }

        // 关闭壁纸设置
        function closeWallpaperSettings() {
            document.getElementById('wallpaperWindow').classList.remove('active');
        }

        // 打开相册
        function openPhotos() {
            document.getElementById('photosWindow').classList.add('active');
        }

        // 关闭相册
        function closePhotos() {
            document.getElementById('photosWindow').classList.remove('active');
        }

        // 清除所有应用
        document.getElementById('multitaskClearBtn').addEventListener('click', function() {
            appStack = [];
            localStorage.setItem('appStack', JSON.stringify(appStack));
            updateMultitaskView();
            showHint('已清除所有应用');
        });
        
        // 切换内置浏览器设置
        function toggleBuiltinBrowser() {
            systemSettings.useBuiltinBrowser = document.getElementById('useBuiltinBrowserToggle').checked;
            localStorage.setItem('systemSettings', JSON.stringify(systemSettings));
            
            // 显示提示
            showHint(systemSettings.useBuiltinBrowser ? '已启用内置浏览器' : '已禁用内置浏览器');
        }
        
        // 显示添加应用对话框
        function showAddAppDialog() {
            document.getElementById('addAppDialog').classList.add('active');
        }
        
        // 隐藏添加应用对话框
        function hideAddAppDialog() {
            document.getElementById('addAppDialog').classList.remove('active');
            // 清空表单
            document.getElementById('appNameInput').value = '';
            document.getElementById('appUrlInput').value = '';
            document.getElementById('appIconInput').value = '';
        }
        
        // 添加链接应用
        function addLinkApp() {
            const name = document.getElementById('appNameInput').value.trim();
            const url = document.getElementById('appUrlInput').value.trim();
            const iconUrl = document.getElementById('appIconInput').value.trim();
            
            if (!name || !url) {
                alert('请填写应用名称和链接');
                return;
            }
            
            // 验证URL格式
            try {
                new URL(url);
            } catch (e) {
                alert('请输入有效的URL');
                return;
            }
            
            const newApp = {
                id: Date.now().toString(),
                name: name,
                url: url,
                iconUrl: iconUrl || null
            };
            
            linkApps.push(newApp);
            localStorage.setItem('linkApps', JSON.stringify(linkApps));
            
            // 更新UI
            initLinkApps();
            hideAddAppDialog();
            
            // 显示成功提示
            showHint('应用已添加到桌面');
        }

        // 显示提示
        function showHint(message) {
            const hint = document.getElementById('fullscreenHint');
            hint.textContent = message;
            hint.style.display = 'block';
            setTimeout(() => {
                hint.style.display = 'none';
            }, 2000);
        }
        
        // 应用打开功能
        document.querySelectorAll('.app-icon, .dock-app').forEach(icon => {
            icon.addEventListener('click', function(e) {
                // 如果是文件夹，只打开文件夹不启动应用
                if (this.classList.contains('folder')) {
                    this.classList.toggle('open');
                    return;
                }
                
                const appId = this.getAttribute('data-app');
                if (appData[appId]) {
                    launchAppWithAnimation(this, appId);
                    
                    // 添加到应用堆栈
                    addToAppStack({
                        id: appId,
                        title: appData[appId].title,
                        type: 'native'
                    });
                }
            });
            
            // 长按交互
            let pressTimer;
            icon.addEventListener('touchstart', function(e) {
                pressTimer = setTimeout(() => {
                    showLongPressMenu(this, e);
                }, 500);
            });
            
            icon.addEventListener('touchend', function() {
                clearTimeout(pressTimer);
            });
            
            icon.addEventListener('touchmove', function() {
                clearTimeout(pressTimer);
            });
        });
        
        // 应用启动动画 - 修复：修复圆形图标残留问题
        function launchAppWithAnimation(icon, appId) {
            if (appLaunchAnimation) {
                // 如果已经有动画在运行，中断它
                appLaunchInterrupted = true;
                clearTimeout(appLaunchAnimation);
            }
            
            const iconRect = icon.getBoundingClientRect();
            const iconClone = icon.querySelector('.app-icon-bg').cloneNode(true);
            
            // 设置克隆图标的位置和样式 - 使用新类名避免残留
            iconClone.classList.add('app-icon-clone');
            iconClone.style.position = 'fixed';
            iconClone.style.top = `${iconRect.top}px`;
            iconClone.style.left = `${iconRect.left}px`;
            iconClone.style.width = `${iconRect.width}px`;
            iconClone.style.height = `${iconRect.height}px`;
            iconClone.style.zIndex = '3000';
            iconClone.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            document.body.appendChild(iconClone);
            
            // 阶段1：图标放大 (0-150ms)
            setTimeout(() => {
                if (appLaunchInterrupted) return;
                
                iconClone.style.transform = 'scale(1.1)';
                iconClone.style.opacity = '0.8';
                
                // 周围图标轻微向外扩散
                const surroundingIcons = getSurroundingIcons(icon);
                surroundingIcons.forEach(surroundingIcon => {
                    surroundingIcon.style.transform = 'scale(0.95)';
                    surroundingIcon.style.transition = 'transform 0.2s ease';
                });
            }, 0);
            
            // 阶段2：全屏过渡 (150-300ms)
            setTimeout(() => {
                if (appLaunchInterrupted) return;
                
                const screenCenterX = window.innerWidth / 2;
                const screenCenterY = window.innerHeight / 2;
                
                iconClone.style.top = `${screenCenterY}px`;
                iconClone.style.left = `${screenCenterX}px`;
                iconClone.style.transform = 'translate(-50%, -50%) scale(1.5)';
                iconClone.style.opacity = '0';
                
                // 背景添加模糊蒙版效果
                document.getElementById('homeScreen').style.filter = 'blur(5px)';
                document.getElementById('homeScreen').style.transition = 'filter 0.3s ease';
            }, 150);
            
            // 阶段3：内容加载 (300-450ms)
            setTimeout(() => {
                if (appLaunchInterrupted) {
                    // 清理中断状态
                    appLaunchInterrupted = false;
                    if (iconClone.parentNode) {
                        iconClone.parentNode.removeChild(iconClone);
                    }
                    resetSurroundingIcons();
                    document.getElementById('homeScreen').style.filter = 'none';
                    return;
                }
                
                // 移除克隆图标 - 确保一定被移除
                if (iconClone.parentNode) {
                    iconClone.parentNode.removeChild(iconClone);
                }
                
                // 恢复周围图标
                resetSurroundingIcons();
                
                // 加载应用内容
                document.getElementById('appTitle').textContent = appData[appId].title;
                document.getElementById('appContent').innerHTML = appData[appId].content;
                
                // 显示应用窗口
                document.getElementById('appWindow').classList.add('active');
                
                // 恢复背景模糊
                document.getElementById('homeScreen').style.filter = 'none';
                
                // 如果是设置应用，初始化设置开关
                if (appId === 'settings') {
                    const fullscreenToggle = document.getElementById('fullscreenToggle');
                    fullscreenToggle.checked = document.body.classList.contains('fullscreen-mode');
                    fullscreenToggle.addEventListener('change', toggleFullscreenMode);
                    
                    const builtinBrowserToggle = document.getElementById('useBuiltinBrowserToggle');
                    builtinBrowserToggle.checked = systemSettings.useBuiltinBrowser;
                    builtinBrowserToggle.addEventListener('change', toggleBuiltinBrowser);
                    
                    // 初始化添加应用按钮
                    document.getElementById('addAppBtn').addEventListener('click', showAddAppDialog);

                    // 初始化应用管理项
                    document.getElementById('appManagementItem').addEventListener('click', openAppManagement);
                    
                    // 初始化显示与亮度项
                    document.getElementById('displayBrightnessItem').addEventListener('click', openDisplayBrightness);
                }
                
                // 如果是显示与亮度应用
                if (appId === 'displayBrightness') {
                    // 初始化壁纸设置项
                    document.getElementById('wallpaperSettingItem').addEventListener('click', openWallpaperSettings);
                }
                
                // 如果是壁纸应用
                if (appId === 'wallpaper') {
                    initWallpaperPage();
                }
                
                // 如果是相册应用
                if (appId === 'photos') {
                    initPhotosPage();
                }
                
                appLaunchAnimation = null;
            }, 300);
        }
        
        // 获取周围图标
        function getSurroundingIcons(icon) {
            const allIcons = Array.from(document.querySelectorAll('.app-icon:not(.folder)'));
            const iconIndex = allIcons.indexOf(icon);
            const surroundingIcons = [];
            
            // 获取前后各两个图标
            for (let i = Math.max(0, iconIndex - 2); i <= Math.min(allIcons.length - 1, iconIndex + 2); i++) {
                if (i !== iconIndex) {
                    surroundingIcons.push(allIcons[i]);
                }
            }
            
            return surroundingIcons;
        }
        
        // 重置周围图标
        function resetSurroundingIcons() {
            document.querySelectorAll('.app-icon').forEach(icon => {
                icon.style.transform = '';
            });
        }
        
        // 显示长按菜单
        function showLongPressMenu(icon, event) {
            const menu = document.getElementById('longPressMenu');
            const rect = icon.getBoundingClientRect();
            
            menu.style.top = `${rect.top + rect.height / 2}px`;
            menu.style.left = `${rect.left + rect.width / 2}px`;
            menu.classList.add('active');
            
            // 点击其他地方关闭菜单
            const closeMenu = (e) => {
                if (!menu.contains(e.target)) {
                    menu.classList.remove('active');
                    document.removeEventListener('click', closeMenu);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closeMenu);
            }, 10);
        }
        
        // 关闭应用
        document.getElementById('closeApp').addEventListener('click', function() {
            document.getElementById('appWindow').classList.remove('active');
        });

        // 关闭应用管理
        document.getElementById('closeAppManagement').addEventListener('click', closeAppManagement);

        // 关闭壁纸设置
        document.getElementById('closeWallpaper').addEventListener('click', closeWallpaperSettings);

        // 关闭相册
        document.getElementById('closePhotos').addEventListener('click', closePhotos);
        
        // 控制中心显示/隐藏
        let startY = 0;
        let controlCenterVisible = false;
        
        document.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', function(e) {
            if (!startY) return;
            
            const endY = e.changedTouches[0].clientY;
            const diffY = endY - startY;
            
            // 从屏幕顶部下滑显示控制中心
            if (startY < 100 && diffY > 50 && !controlCenterVisible) {
                document.getElementById('controlCenter').classList.add('active');
                controlCenterVisible = true;
            }
            
            // 从控制中心上滑隐藏
            if (controlCenterVisible && startY > 100 && startY < 200 && diffY < -50) {
                document.getElementById('controlCenter').classList.remove('active');
                controlCenterVisible = false;
            }
            
            startY = 0;
        });
        
        // 手势识别初始化 - 修复：优化手势区域划分和全局手势支持
        function initGestureRecognition() {
            const gestureZoneLeft = document.getElementById('gestureZoneLeft');
            const gestureZoneCenter = document.getElementById('gestureZoneCenter');
            const gestureZoneRight = document.getElementById('gestureZoneRight');
            
            // 为所有界面添加手势支持
            document.addEventListener('touchstart', function(e) {
                // 检查触摸是否在底部区域
                const touchY = e.touches[0].clientY;
                if (touchY > window.innerHeight - 150) {
                    gestureStartY = touchY;
                    gestureStartX = e.touches[0].clientX;
                    
                    // 根据X坐标判断区域
                    const touchX = e.touches[0].clientX;
                    const screenWidth = window.innerWidth;
                    
                    if (touchX < screenWidth * 0.33) {
                        homeGestureActive = true;
                        showGestureHint('left');
                    } else if (touchX > screenWidth * 0.66) {
                        returnGestureActive = true;
                        showGestureHint('right');
                    } else {
                        gestureZoneStart = true;
                        showGestureHint('center');
                    }
                }
            });
            
            document.addEventListener('touchmove', function(e) {
                const touchY = e.touches[0].clientY;
                const diffY = touchY - gestureStartY;
                
                if (homeGestureActive && diffY < -30) {
                    showGestureFeedback('left');
                } else if (returnGestureActive && diffY < -30) {
                    showGestureFeedback('right');
                } else if (gestureZoneStart && diffY < -30) {
                    showGestureFeedback('center');
                }
            });
            
            document.addEventListener('touchend', function(e) {
                const touchY = e.changedTouches[0].clientY;
                const diffY = touchY - gestureStartY;
                
                // 只在滑动距离足够时触发手势
                if (Math.abs(diffY) > 50) {
                    if (homeGestureActive && diffY < -50) {
                        handleHomeGesture();
                    } else if (returnGestureActive && diffY < -50) {
                        handleReturnGesture();
                    } else if (gestureZoneStart && diffY < -50) {
                        document.getElementById('multitaskView').classList.add('active');
                    }
                }
                
                // 重置所有手势状态
                homeGestureActive = false;
                returnGestureActive = false;
                gestureZoneStart = false;
                
                // 隐藏所有反馈
                hideGestureFeedback('left');
                hideGestureFeedback('right');
                hideGestureFeedback('center');
                hideGestureHint('left');
                hideGestureHint('right');
                hideGestureHint('center');
            });
        }

        // 显示手势反馈
        function showGestureFeedback(type) {
            const feedback = document.getElementById(`gestureFeedback${type.charAt(0).toUpperCase() + type.slice(1)}`);
            feedback.classList.add('active');
        }

        // 隐藏手势反馈
        function hideGestureFeedback(type) {
            const feedback = document.getElementById(`gestureFeedback${type.charAt(0).toUpperCase() + type.slice(1)}`);
            feedback.classList.remove('active');
        }

        // 显示手势提示
        function showGestureHint(type) {
            const hint = document.getElementById(`gestureHint${type.charAt(0).toUpperCase() + type.slice(1)}`);
            hint.classList.add('active');
        }

        // 隐藏手势提示
        function hideGestureHint(type) {
            const hint = document.getElementById(`gestureHint${type.charAt(0).toUpperCase() + type.slice(1)}`);
            hint.classList.remove('active');
        }
        
        // 处理返回手势
        function handleReturnGesture() {
            // 如果应用窗口是打开的，关闭它
            if (document.getElementById('appWindow').classList.contains('active')) {
                document.getElementById('appWindow').classList.remove('active');
            }
            // 如果多任务视图是打开的，关闭它
            else if (document.getElementById('multitaskView').classList.contains('active')) {
                document.getElementById('multitaskView').classList.remove('active');
            }
            // 如果控制中心是打开的，关闭它
            else if (document.getElementById('controlCenter').classList.contains('active')) {
                document.getElementById('controlCenter').classList.remove('active');
                controlCenterVisible = false;
            }
            // 如果通知中心是打开的，关闭它
            else if (document.getElementById('notificationCenter').classList.contains('active')) {
                document.getElementById('notificationCenter').classList.remove('active');
            }
            // 如果应用管理是打开的，关闭它
            else if (document.getElementById('appManagementWindow').classList.contains('active')) {
                document.getElementById('appManagementWindow').classList.remove('active');
            }
            // 如果壁纸设置是打开的，关闭它
            else if (document.getElementById('wallpaperWindow').classList.contains('active')) {
                document.getElementById('wallpaperWindow').classList.remove('active');
            }
            // 如果相册是打开的，关闭它
            else if (document.getElementById('photosWindow').classList.contains('active')) {
                document.getElementById('photosWindow').classList.remove('active');
            }
        }

        // 处理返回主界面手势
        function handleHomeGesture() {
            // 关闭所有打开的窗口
            document.getElementById('appWindow').classList.remove('active');
            document.getElementById('multitaskView').classList.remove('active');
            document.getElementById('controlCenter').classList.remove('active');
            document.getElementById('notificationCenter').classList.remove('active');
            document.getElementById('appManagementWindow').classList.remove('active');
            document.getElementById('wallpaperWindow').classList.remove('active');
            document.getElementById('photosWindow').classList.remove('active');
            controlCenterVisible = false;
        }
        
        // 锁屏/解锁功能
        let isLocked = true;
        let lockStartY = 0;
        
        document.getElementById('lockScreen').addEventListener('touchstart', function(e) {
            lockStartY = e.touches[0].clientY;
        });
        
        document.getElementById('lockScreen').addEventListener('touchend', function(e) {
            if (!lockStartY) return;
            
            const endY = e.changedTouches[0].clientY;
            const diffY = endY - lockStartY;
            
            if (isLocked && diffY < -50) {
                this.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    this.style.display = 'none';
                }, 300);
                isLocked = false;
            }
            
            lockStartY = 0;
        });
        
        // 点击控制中心外部关闭
        document.getElementById('controlCenter').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                controlCenterVisible = false;
            }
        });
        
        // 点击多任务视图外部关闭
        document.getElementById('multitaskView').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
        
        // 全屏模式切换功能
        function toggleFullscreenMode() {
            const isFullscreen = document.getElementById('fullscreenToggle').checked;
            
            if (isFullscreen) {
                // 进入全屏模式
                document.body.classList.add('fullscreen-mode');
                showHint('已进入全屏模式');
                
                // 尝试进入浏览器全屏模式
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestfullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
            } else {
                // 退出全屏模式
                document.body.classList.remove('fullscreen-mode');
                
                // 退出浏览器全屏模式
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
        
        // 监听全屏变化事件
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);
        
        function handleFullscreenChange() {
            const isFullscreen = !!(document.fullscreenElement || document.mozFullScreenElement || 
                                   document.webkitFullscreenElement || document.msFullscreenElement);
            
            // 更新全屏模式开关状态
            const fullscreenToggle = document.getElementById('fullscreenToggle');
            if (fullscreenToggle) {
                fullscreenToggle.checked = isFullscreen;
            }
            
            // 更新全屏模式样式
            if (isFullscreen) {
                document.body.classList.add('fullscreen-mode');
            } else {
                document.body.classList.remove('fullscreen-mode');
            }
        }

        // 暗色模式切换功能
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            systemSettings.darkMode = isDarkMode;
            localStorage.setItem('systemSettings', JSON.stringify(systemSettings));
            
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                showHint('已开启暗色模式');
            } else {
                document.body.classList.remove('dark-mode');
                showHint('已关闭暗色模式');
            }
        }
        
        // 添加应用对话框事件
        document.getElementById('dialogClose').addEventListener('click', hideAddAppDialog);
        document.getElementById('dialogCancel').addEventListener('click', hideAddAppDialog);
        document.getElementById('dialogConfirm').addEventListener('click', addLinkApp);
        
        // 初始化
        document.addEventListener('DOMContentLoaded', function() {
            initLinkApps();
            initGestureRecognition();
            updateMultitaskView(); // 初始化多任务视图
            initWallpaperSystem(); // 初始化壁纸系统
            
            // 初始化设置应用中的添加应用按钮
            if (document.getElementById('addAppBtn')) {
                document.getElementById('addAppBtn').addEventListener('click', showAddAppDialog);
            }

            // 初始化控制中心专注按钮（暗色模式开关）
            document.querySelector('.focus-mode-toggle').addEventListener('click', toggleDarkMode);

            // 初始化暗色模式
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
            }

            // 确保小白条在所有界面都显示
            const homeIndicator = document.querySelector('.home-indicator');
            homeIndicator.style.display = 'block';
        });
        
        // 添加一些样式到动态内容
        const style = document.createElement('style');
        style.textContent = `
            .message-list {
                margin-top: 10px;
            }
            
            .keypad {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .keypad-row {
                display: flex;
                justify-content: space-around;
            }
        `;
        document.head.appendChild(style);