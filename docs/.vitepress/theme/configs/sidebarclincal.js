import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export function sidebarclincal() {
    return [
        {
            text: '一、血液样本采集和血涂片制备',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/1/')
        },
        {
            text: '二、红细胞检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/2/')
        },
        {
            text: '三、白细胞检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/3/')
        },
        {
            text: '四、血液分析仪及其临床应用',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/4/')
        },
        {
            text: '五、血型和输血',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/5/')
        },
        {
            text: '六、尿液生成和标本采集及处理',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/6/')
        },
        {
            text: '七、尿理学检验',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/7/')
        },
        {
            text: '八、尿有形成分检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/8/')
        },
        {
            text: '九、尿液化学检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/9/')
        },
        {
            text: '十、尿液分析仪及其临床应用',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/10/')
        },
        {
            text: '十一、粪便检验',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/11/')
        },
        {
            text: '十二、脑脊液检验',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/12/')
        },
        {
            text: '十三、浆膜腔积液检验',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/13/')
        },

        {
            text: '十四、精液检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/14/')
        },
        {
            text: '十五、前列腺液检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/15/')
        },
        {
            text: '十六、阴道分泌物检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/16/')
        },
        {
            text: '十七、羊水检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/17/')
        },
        {
            text: '十八、痰及支气管肺泡灌洗液检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/18/')
        },
        {
            text: '十九、胃液和十二指肠引流液检验',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/19/')
        },
        {
            text: '二十、脱落细胞检查',
            collapsible: true,
            collapsed:true,
            items: SidebarBuilder.get.filesAndOrder('./docs/guide/clinical/20/')
        },

    ]
}