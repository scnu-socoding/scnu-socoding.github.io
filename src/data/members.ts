const membersData = [
  {
    name: '包楠玉',
    englishName: 'BaoNanYu',
    code: 'CFO/财务',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/bizmail/ibXUv1to8rtSichKLkswLCb1L8WCRt3fG5uia8gtfoNZIRT20lx97Opbw/0',
  },
  {
    name: '蔡逸彬',
    englishName: 'CaiYiBin',
    code: 'XSO/战略',
    belongs: 'SoCoding/委员会/发展组;SoCoding/委员会/发展组/椰风游戏开发社;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/bizmail/ZqTID4K7AibxaEELUpjoMhHCQuZ7fhrd8iahEQGRic2sxzwGYaJoTBVWQ/0',
  },
  {
    name: '蔡贻健',
    englishName: 'CaiYiJian',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/766343_DePBFaHLSH-INnx_1663736623/0',
  },
  {
    name: '陈嘉成',
    englishName: 'ChenJiaCheng',
    code: 'GuoDong/香农负责人',
    belongs: 'SoCoding/会员;SoCoding/委员会/发展组/香农先修班',
    avatar: 'https://wework.qpic.cn/wwpic/171215_g-0XIkm-TFWtj_O_1661618042/0',
  },
  {
    name: '陈家骏',
    englishName: 'ChenJiaJun',
    code: 'A1m233/香农负责人',
    belongs: 'SoCoding/委员会/发展组/香农先修班;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/430915_Gom_eU4MRqCpkF6_1661255861/0',
  },
  {
    name: '陈俊宇',
    englishName: 'ChenJunYu',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/850927_hxlKtAp0SE2OxOM_1660783857/0',
  },
  {
    name: '陈雯雯',
    englishName: 'ChenWenWen',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/228999_nNtsGreLQiOT_oF_1663632885/0',
  },
  {
    name: '邓宇迪',
    englishName: 'DengYuDi',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/424493_k0dPyjBPTm-3vVL_1663633797/0',
  },
  {
    name: '甘一伟',
    englishName: 'GanYiWei',
    code: 'dakta/香农主要负责人',
    belongs: 'SoCoding/委员会/发展组/香农先修班;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/339796_-UpKp0ymQJCCLei_1660916838/0',
  },
  {
    name: '高振明',
    englishName: 'GaoZhenMing',
    code: '技术部工作人员',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/387276_k0G41ILpTE29XN7_1663736042/0',
  },
  {
    name: '何思嘉',
    englishName: 'HeSiJia',
    code: 'Coco/椰社主要负责人',
    belongs: 'SoCoding/委员会/发展组/椰风游戏开发社;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/881961_UA4aTUpuT8K0OlA_1651659399/0',
  },
  {
    name: '何子阳',
    englishName: 'HeZiYang',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/229717_5fEcyauuTCiy_lu_1663632894/0',
  },
  {
    name: '洪晖',
    englishName: 'HongHui',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/935302_Xd0lu_LNQDm_rZ6_1662255147/0',
  },
  {
    name: '洪佳豪',
    englishName: 'HongJiaHao',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/533652__dWlRJGmSY-PyPl_1660794809/0',
  },
  {
    name: '黄磊',
    englishName: 'HuangLei',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/278811_G-dngVrPRf27bur_1661559002/0',
  },
  {
    name: '黄宇恒',
    englishName: 'HuangYuHeng',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/131060_840vG58qTqWKBib_1660926424/0',
  },
  {
    name: '胡铭华',
    englishName: 'HuMingHua',
    code: 'CTO/技术',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/592298_9zDIt7fAS_yaOlN_1663867092/0',
  },
  {
    name: '赖柏宇',
    englishName: 'LaiBoYu',
    code: 'XSO/战略',
    belongs: 'SoCoding/委员会/发展组;SoCoding/委员会/发展组/椰风游戏开发社;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/723812_7Z7bLaSIQUebvfG_1659357973/0',
  },
  {
    name: '赖正谦',
    englishName: 'LaiZhengQian',
    code: '椰社主要负责人',
    belongs: 'SoCoding/委员会/发展组/椰风游戏开发社;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/831179_AHcIDBdfQjmIoHK_1662826373/0',
  },
  {
    name: '梁弘烨',
    englishName: 'LiangHongYe',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/368728_E_np6keGQXi92tL_1663633713/0',
  },
  {
    name: '梁家健',
    englishName: 'LiangJiaJian',
    code: '技术部工作人员',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/580203_AKgBWjiOTGC_RoZ_1663679899/0',
  },
  {
    name: '李彩桦',
    englishName: 'LiCaiHua',
    code: 'CDO/设计',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/873159_-obowK7ARwCemcT_1660900241/0',
  },
  {
    name: '李建新',
    englishName: 'LiJianXin',
    code: '运营部工作人员',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/385432_V09v6eEvSXelEhw_1663738687/0',
  },
  {
    name: '李俊华',
    englishName: 'LiJunHua',
    code: '技术部工作人员',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/192468_uiMDRUUiQcqOzY__1663742663/0',
  },
  {
    name: '李勉鑫',
    englishName: 'LiMianXin',
    code: 'comeon/香农负责人',
    belongs: 'SoCoding/委员会/发展组/香农先修班;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/364580_GX-GvFTwSSSZ1Zy_1663863210/0',
  },
  {
    name: '林美君',
    englishName: 'LinMeiJun',
    code: 'CHO/人资',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/770652_Mw-8r16iQuG29Y7_1663990308/0',
  },
  {
    name: '刘嘉良',
    englishName: 'LiuJiaLiang',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/871840_PdMfD6qFTwWT3N4_1661072581/0',
  },
  {
    name: '刘骏龙',
    englishName: 'LiuJunLong',
    code: 'CHO/人资',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/977982_x2tXZ2QQRKWaghf_1651156817/0',
  },
  {
    name: '李心楠',
    englishName: 'LiXinNan',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/782727_95cUV8q9S1C1B_Z_1664075415/0',
  },
  {
    name: '李心妍',
    englishName: 'LiXinYan',
    code: '运营部工作人员',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/318862_SH0Z90bkQtCBrfq_1663736099/0',
  },
  {
    name: '吕昊达',
    englishName: 'LvHaoDa',
    code: 'XSO/战略',
    belongs: 'SoCoding/委员会/发展组;SoCoding/委员会/发展组/椰风游戏开发社;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/655324_-Ag6YIYeS-67jdq_1663735521/0',
  },
  {
    name: '麦志壕',
    englishName: 'MaiZhiHao',
    code: '运营部工作人员',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/240606_qZnrOv66S9iCds5_1663809702/0',
  },
  {
    name: '马吴越',
    englishName: 'MaWuYue',
    code: 'CTO/技术',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/bizmail/14t338iaqPYhglnF5cWAE2SV7qz18xXwwF5xrqO1iaz8zqhr7EbCzjTg/0',
  },
  {
    name: '潘俊康',
    englishName: 'PanJunKang',
    code: '运营部工作人员',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/334531_3l1XlQLTQZy8Lxi_1660907278/0',
  },
  {
    name: '彭帅',
    englishName: 'PengShuai',
    code: '技术部工作人员',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/411657_6vaPXh3uTOaV1U0_1663632964/0',
  },
  {
    name: '邱越洋',
    englishName: 'QiuYueYang',
    code: 'XEO/副会长',
    belongs: 'SoCoding/委员会;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/590761_J4ZrPf_9QIGEYee_1650936075/0',
  },
  {
    name: '苏俊辉',
    englishName: 'SuJunHui',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/620380_8FH1WU6URaWgcca_1663736664/0',
  },
  {
    name: '孙铎誉',
    englishName: 'SunDuoYu',
    code: '运营部工作人员',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/281068_QzqZPFl2SIaFaw-_1663762296/0',
  },
  {
    name: '孙瑜妤',
    englishName: 'SunYuYu',
    code: '运营部工作人员',
    belongs: 'SoCoding/会员;SoCoding/委员会/运营部',
    avatar: 'https://wework.qpic.cn/wwpic/872005_dLJzwjVXQmiWnHx_1663632890/0',
  },
  {
    name: '苏毅',
    englishName: 'SuYi',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/210149_EU6jNd42SyeQuK0_1663635339/0',
  },
  {
    name: '唐思涵',
    englishName: 'TangSiHan',
    code: 'COO/运营',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/185808_UvCrX-csQNmWQMr_1663738983/0',
  },
  {
    name: '覃梓鑫',
    englishName: 'QinZiXin',
    code: 'XEO/副会长',
    belongs: 'SoCoding/委员会;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/499783_h0TAThxKROuFYxv_1661532615/0',
  },
  {
    name: '王家晔',
    englishName: 'WangJiaYe',
    code: 'CEO/会长',
    belongs: 'SoCoding/委员会;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/599240_3Y2LBpI7RLm9eln_1664494661/0',
  },
  {
    name: '韦舟',
    englishName: 'WeiZhou',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/826214_2XRsqlcwTD6eEJi_1663735668/0',
  },
  {
    name: '吴嘉桐',
    englishName: 'WuJiaTong',
    code: '信宣部工作人员',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/689433_e2k0zj1BSCO3RWT_1660969544/0',
  },
  {
    name: '吴清源',
    englishName: 'WuQingYuan',
    code: 'dayuanx/香农主要负责人',
    belongs: 'SoCoding/委员会/发展组/香农先修班;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/bizmail/7ib9o52QgREVGEpTicZZIsiaaf7UlibUtdWBTfahicVwQ8aJ9pXS2BwCYWw/0',
  },
  {
    name: '吴宇彤',
    englishName: 'WuYuTong',
    code: '运营部工作人员',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/549955_Ao5hms7fQHmwM6a_1660969328/0',
  },
  {
    name: '熊铮煌',
    englishName: 'XiongZhengHuang',
    code: '技术部工作人员',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/43465_hIzo8_98Qk2kUlv_1663633445/0',
  },
  {
    name: '杨诗钊',
    englishName: 'YangShiZhao',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/610646_QYnEwUTASi6CKVJ_1663770760/0',
  },
  {
    name: '袁子锋',
    englishName: 'YuanZiFeng',
    code: 'Tension/香农负责人',
    belongs: 'SoCoding/委员会/发展组/香农先修班;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/703626_kR8Zy-WMQ9KNRsg_1663736728/0',
  },
  {
    name: '余昕芪',
    englishName: 'YuXinQi',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/526188_W0CO87cdS8m8akn_1663119903/0',
  },
  {
    name: '曾熙茵',
    englishName: 'ZengXiYin',
    code: 'CIO/信息',
    belongs: 'SoCoding/委员会/技术部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/357934_R_WRheOkS66tiW__1651107239/0',
  },
  {
    name: '张成',
    englishName: 'ZhangCheng',
    code: 'COO/运营',
    belongs: 'SoCoding/委员会/运营部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/735085_3QdWmdIITQeaFlY_1660924025/0',
  },
  {
    name: '张佳乐',
    englishName: 'ZhangJiaLe',
    code: 'XEO/副会长',
    belongs: 'SoCoding/委员会;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/856284_GYoeQgFyStSQ6dB_1664056267/0',
  },
  {
    name: '郑景仁',
    englishName: 'ZhengJingRen',
    code: 'CMO/市场',
    belongs: 'SoCoding/委员会/信宣部;SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/657542_Lt--__2iRpmTHqo_1663735921/0',
  },
  {
    name: '周倩怡',
    englishName: 'ZhouQianYi',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/728267_j-GcmSDqQUyaFHZ_1663672796/0',
  },
  {
    name: '朱圳炜',
    englishName: 'ZhuZhenWei',
    code: '会员',
    belongs: 'SoCoding/会员',
    avatar: 'https://wework.qpic.cn/wwpic/597432_BmUwClSWQAa-nJ1_1662298287/0',
  },
].sort((a, b) => a.englishName.localeCompare(b.englishName))

export default membersData
