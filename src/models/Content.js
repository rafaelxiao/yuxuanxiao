const ContentEN = {
    introMe: "Hi I am Yuxuan Xiao",
    introChar: "Data Analyst / Developer / Content Creator",
    introPrompt: "Veteran data analyst passionate on discovering and telling stories hides behind data. Extensive experience in business and finance with a MBA degree and CFA level 3 passed. Familiar with technology like machine learning, time series and neural network",
    introBackgroundImg: require('../images/thisisengineering.jpg'),
    navHome: "Home",
    navProjects: "Projects",
    navExperience: "Experience",
    navSkills: "Skills",
    projects: [
        {title: 'Open: Blindness Detection', desc: 'Kaggle Competetion Final Ranking: 30/2928. Using computer vision to identify diabetic retinopathy. Silver medal won.', img_url: require('../images/aptos2019.jpg'), project_url: "https://www.kaggle.com/competitions/aptos2019-blindness-detection/leaderboard"},
        {title: 'Open: Energy Predictor', desc: 'Kaggle Competetion Final Ranking: 172/3614. Using public building\'s attributes to predict its energy consumption. Silver medal won.', img_url: require('../images/ashrae_energy.jpg'), project_url: "https://www.kaggle.com/competitions/ashrae-energy-prediction"},
        {title: 'Open: Worker Timer', desc: 'A multi-task timer to track and priotize different tasks. Supported platform: PC, Mobile.', img_url: require('../images/worktimer.jpg'), project_url: "https://rafaelxiao.github.io/worktimer"},
        {title: 'Open: Trading Pit', desc: 'A trading simulator with the support of setting strategies and reviewing performance stats. Supported platform: PC.', img_url: require('../images/tradingpit.jpg'), project_url: "https://rafaelxiao.github.io/tradingpit"},
    ],
    skills: [
        {
            category: 'Data Mining', 
            desc: 'Statistical analysis, Machine Learning, Deep Learning, Data Visualization, Web Scraping',
            icon_url: require('../images/mind.png')
        },
        {
            category: 'Languages', 
            desc: 'Python, SQL, Javascript, Java, Swift, Dart',
            icon_url: require('../images/python.png')
        },
        {
            category: 'Tools and Frameworks', 
            desc: 'Hive, Spark, Pandas, Pytorch, TensorFlow, React, Flutter, Echarts, PPT',
            icon_url: require('../images/chart.png')
        },
    ],
}

const ContentCN = {
    introMe: "我是肖宇宣",
    introChar: "数据分析师 / 开发者 / 创作者",
    introPrompt: "经验丰富的数据分析师，习惯用数据发现和检验认知。擅长商业、金融领域数据挖掘与分析，拥有MBA学位及CFA三级，能够运用机器学习、时间序列、神经网络等技术实现基于海量数据的业务赋能",
    introBackgroundImg: require('../images/thisisengineering.jpg'),
    navHome: "主页",
    navProjects: "项目",
    navExperience: "经验",
    navSkills: "技能",
    projects: [
        {title: '查看：APTOS盲眼检测', desc: 'Kaggle竞赛最终排名30/2928。一个图像识别竞赛，通过眼球拍片识别患者糖尿病视网膜病变的概率。比赛获银牌。', img_url: require('../images/aptos2019.jpg'), project_url: "https://www.kaggle.com/competitions/aptos2019-blindness-detection/leaderboard"},
        {title: '查看：ASHRAE建筑耗能预测', desc: 'Kaggle竞赛最终排名172/3614。通过公共建筑的地理位置、营业时间、面积等特征预测其能源消耗情况。比赛获银牌。', img_url: require('../images/ashrae_energy.jpg'), project_url: "https://www.kaggle.com/competitions/ashrae-energy-prediction"},
        {title: '查看：效率时钟', desc: '一个帮助管理日间任务的小工具，支持同时追踪多个任务，实现时间合理分配。支持平台：PC、移动端。', img_url: require('../images/worktimer.jpg'), project_url: "https://rafaelxiao.github.io/worktimer"},
        {title: '查看：交易模拟', desc: '一个模拟股票买卖交易的应用，支持设定买卖策略及对胜率、赔率等关键指标进行统计。支持平台：PC端。', img_url: require('../images/tradingpit.jpg'), project_url: "https://rafaelxiao.github.io/tradingpit"},
        
    ],
    skills: [
        {
            category: '数据分析挖掘', 
            desc: '统计分析、机器学习、深度学习、数据可视、网络爬虫',
            icon_url: require('../images/mind.png')
        },
        {
            category: '开发语言', 
            desc: 'Python、SQL、Javascript、Java、Swift、Dart',
            icon_url: require('../images/python.png')
        },
        {
            category: '工具及框架', 
            desc: 'Hive、Spark、Pandas、Pytorch、TensorFlow、React、Flutter、Echarts、PPT',
            icon_url: require('../images/chart.png')
        },
    ],
}

export { ContentCN, ContentEN };
