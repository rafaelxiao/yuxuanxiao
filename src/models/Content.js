const ContentEN = {
    homeTitle: "Yuxuan Xiao Portfolio",
    chartPageTitle: "Economy Watch",
    introMe: "Hi I am Yuxuan Xiao",
    introChar: "Data Analyst / Developer / Content Creator",
    introPrompt: "Veteran data analyst passionate on discovering and telling stories with data. Extensive experience in business and finance, with a MBA degree and CFA level 3. Capable of utilizing technology like machine learning, time series and neural network",
    introBackgroundImg: require('../images/thisisengineering.jpg'),
    navHome: "Home",
    navProjects: "Projects",
    navExperience: "Experience",
    navSkills: "Skills",
    navCharts: "Economy Watch",
    navContact: "Contact",
    displayCharts: "Economy Watch",
    displayContact: "Contact me",
    projects: [
        {title: 'Kaggle: Blindness Detection', desc: 'Kaggle Competetion Final Ranking: 30/2928. Using computer vision to identify diabetic retinopathy. Silver medal won.', img_url: require('../images/aptos2019.jpg'), project_url: "https://www.kaggle.com/competitions/aptos2019-blindness-detection/leaderboard"},
        {title: 'Kaggle: Energy Predictor', desc: 'Kaggle Competetion Final Ranking: 172/3614. Using public building\'s attributes to predict its energy consumption. Silver medal won.', img_url: require('../images/ashrae_energy.jpg'), project_url: "https://www.kaggle.com/competitions/ashrae-energy-prediction"},
        {title: 'App: Worker Timer', desc: 'A multi-task timer to track and priotize different tasks.', img_url: require('../images/worktimer.jpg'), project_url: "https://rafaelxiao.github.io/worktimer"},
        {title: 'App: Trading Pit', desc: 'A trading simulator with the support of setting strategies and reviewing performance stats.', img_url: require('../images/tradingpit.jpg'), project_url: "https://rafaelxiao.github.io/tradingpit"},
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
    contact: [
        {
            name: 'Email',
            content: 'rafaelxiao@hotmail.com',
            icon_url: require('../images/email.png'),
        },

        // {
        //     name: 'Resume',
        //     content: 'view my resume',
        //     icon_url: require('../images/resume.png'),
        // },

        {
            name: 'Wechat',
            content: 'yuxuanism',
            icon_url: require('../images/wechat.png'),
        },
        {
            name: 'Douyin',
            content: '七海原创',
            icon_url: require('../images/douyin.png'),
        },

    ]
}

const ContentCN = {
    homeTitle: "宇宣的小站",
    chartPageTitle: "经济观察",
    introMe: "我是肖宇宣",
    introChar: "数据分析师 / 开发者 / 创作者",
    introPrompt: "经验丰富的数据分析师，习惯用数据发现和检验认知。擅长商业、金融领域数据挖掘与分析，拥有MBA学位及CFA三级，能够运用机器学习、时间序列、神经网络等技术实现基于海量数据的业务赋能",
    introBackgroundImg: require('../images/thisisengineering.jpg'),
    navHome: "主页",
    navProjects: "项目",
    navExperience: "经验",
    navSkills: "技能",
    navCharts: "经济观察",
    navContact: "联系",
    displayCharts: "经济观察",
    displayContact: "联系我",
    projects: [
        {title: 'Kaggle：APTOS盲眼检测', desc: 'Kaggle竞赛最终排名30/2928。一个图像识别竞赛，通过眼球拍片识别患者糖尿病视网膜病变的概率。比赛获银牌。', img_url: require('../images/aptos2019.jpg'), project_url: "https://www.kaggle.com/competitions/aptos2019-blindness-detection/leaderboard"},
        {title: 'Kaggle：ASHRAE建筑耗能预测', desc: 'Kaggle竞赛最终排名172/3614。通过公共建筑的地理位置、营业时间、面积等特征预测其能源消耗情况。比赛获银牌。', img_url: require('../images/ashrae_energy.jpg'), project_url: "https://www.kaggle.com/competitions/ashrae-energy-prediction"},
        {title: 'App：效率时钟', desc: '一个帮助管理日间任务的小工具，支持同时追踪多个任务，实现时间合理分配。', img_url: require('../images/worktimer.jpg'), project_url: "https://rafaelxiao.github.io/worktimer"},
        {title: 'App：交易模拟', desc: '一个模拟股票买卖交易的应用，支持设定买卖策略及对胜率、赔率等关键指标进行统计。', img_url: require('../images/tradingpit.jpg'), project_url: "https://rafaelxiao.github.io/tradingpit"},
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
    contact: [
        {
            name: '邮件',
            content: 'rafaelxiao@hotmail.com',
            icon_url: require('../images/email.png'),
        },

        // {
        //     name: '简历',
        //     content: '查看我的简历',
        //     icon_url: require('../images/resume.png'),
        // },

        {
            name: '微信',
            content: 'yuxuanism',
            icon_url: require('../images/wechat.png'),
        },

        {
            name: '抖音',
            content: '七海原创',
            icon_url: require('../images/douyin.png'),
        },
    ],
}

export { ContentCN, ContentEN };
