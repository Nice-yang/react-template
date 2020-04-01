/**
 * Created by Nicky on 2019/7/11
 */
import React from 'react';
//看板
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
//BIM模型
// const bimModel = React.lazy(()=> import('../components/pages/bimModel/bimModels'))
const bimModel = React.lazy(()=> import('../components/bimModel/BimModel'))
//进度管理
const ProgressManagement = React.lazy(() => import('../components/progressManagement/ProgressMangement'));
const AllProgress = React.lazy(() => import('../components/progressManagement/ProgressMangement'));
const SectionProgress = React.lazy(() => import('../components/progressManagement/ProgressMangement'));
//台座台账
const Account = React.lazy(() => import('../components/account/Account'));
const SeatStatus = React.lazy(() => import('../components/account/Account'));
const MakingList = React.lazy(() => import('../components/account/Account'));
// const StorageSeatStatus = React.lazy(() => import('../components/pages/account/storageSeatStatus'));
//监控管理
const VideoSurveillance = React.lazy(() => import('../components/monitorManagement/MonitorManagement'));
// const Grouting = React.lazy(() => import('../components/pages/monitorManagement/grouting'));
const MonitorManagement = React.lazy(() => import('../components/monitorManagement/MonitorManagement'));
//设置
const Setting = React.lazy(() => import('../components/setting/Setting'));
const PlatformSetting = React.lazy(() => import('../components/account/Account'));
const ScheduleSetting = React.lazy(() => import('../components/account/Account'));
//提醒
const Remind = React.lazy(() => import('../components/remind/Remid'));
const ProcessRemind = React.lazy(() => import('../components/remind/Remid'));
const DetailRemind = React.lazy(() => import('../components/remind/Remid'));
export default {
    menus: [
        {
            key: '/app/dashboard',
            title: '看板',
            id:"6d677c0145158c2764daf7cc573af1db,74c0e684ee7b60fa01e1e7287537c64d",
            component: Dashboard,
        },
        {
            key: '/app/bimModel',
            title: 'BIM模型',
            id:"3d1a764a62c7843b402b1cb93a13e83a,e493929bc2f3211035e25649072676f2",
            component: bimModel,
            icon: 'bim-model'
        },
        {
            key: '/app/progress-management',
            title: '进度管理',
            id: "37c4572664abf4ba2f69bf2d19348837",
            component: ProgressManagement,
            redirect: "/app/progress-management/plan-manage/schedule-setting",
            
            subs:[{
                key: '/app/progress-management/plan-manage',
                title: '计划管理',
                id:"5a6ec5425974c706941ec294f19b1ea2",
                icon: 'plan-manage',
                subs: [
                    {
                        key: '/app/progress-management/plan-manage/schedule-setting',
                        title: '生产计划',
                        icon: 'schedule-setting',
                        component: ScheduleSetting
                    },
                    {
                        key: '/app/progress-management/plan-manage/platform-setting',
                        title: '台座设置',
                        icon: 'platform-setting',
                        component: PlatformSetting
                    },
                ],
            },{
                key: '/app/progress-management/production-schedule',
                title: '生产进度',
                icon: 'production-schedule',
                id:"d539c22e398721b14af16eed3e75fccb",
                subs: [{
                    key: '/app/progress-management/production-schedule/all-progress',
                    title: '总进度',
                    id:"d539c22e398721b14af16eed3e75fccb",
                    component: AllProgress,
                    icon: 'all-progress'
                },
                    {
                        key: '/app/progress-management/production-schedule/section-progress',
                        title: '梁段进度',
                        component: SectionProgress,
                        icon: 'section-progress'
                    },
                ],
            }]
            
        },
        {
            key: '/app/account',
            title: '台座台账',
            id:"93744d0b4004274702359b34b941bfe4",
            component: Account,
            redirect: "/app/account/binding-pedestal/seat-status",
            subs: [{
                key: '/app/account/binding-pedestal',
                title: '钢筋绑扎台座',
                id:"3893fbed8f22c91890568ef5b58283ea",
                icon: 'pedestal',
                subs: [{
                    key: '/app/account/binding-pedestal/seat-status',
                    title: '台座状态',
                    component: SeatStatus,
                    icon: 'seat-status',
                    stage:1

                },
                    {
                        key: '/app/account/binding-pedestal/binding-list',
                        title: '台座台账',
                        component: MakingList,
                        icon: 'binding-list',
                        stage:1
                    }
                ]
            },
                {
                    key: '/app/account/making-pedestal',
                    title: '制梁台座',
                    id: "3dda38cda7ea4d5270d27a2a12e04c8a",
                    icon: 'pedestal',
                    subs: [{
                        key: '/app/account/making-pedestal/seat-status',
                        title: '台座状态',
                        component: SeatStatus,
                        icon: 'seat-status',
                        stage:10
                    },
                        {
                            key: '/app/account/making-pedestal/making-list',
                            title: '台座台账',
                            id: "93744d0b4004274702359b34b941bfe4",
                            component: MakingList,
                            icon: 'making-list',
                            stage:10
                        }
                    ]
                },
                {
                    key: '/app/account/storage-pedestal',
                    title: '存梁台座',
                    id: "0c2f0376b7e7f9061f99870a7e3d0c29",
                    icon: 'pedestal',
                    component: 'AuthBasic',
                    subs: [{
                        key: '/app/account/storage-pedestal/seat-status',
                        title: '台座状态',
                        component: SeatStatus,
                        icon: 'seat-status',
                        stage:20
                    },
                        {
                            key: '/app/account/storage-pedestal/storage-list',
                            title: '台座台账',
                            component: MakingList,
                            icon: 'making-list',
                            stage:20
                        }
                    ]
                },
            ],
        },
        {
            key: '/app/monitor-management',
            title: '设备监控',
            id: "3fbe24c102c49f9f1f98a3f5f52c1746",
            component: MonitorManagement,
            redirect: "/app/monitor-management/video-surveillance",
            subs: [
                {
                    key: '/app/monitor-management/video-surveillance',
                    title: '视频监控',
                    id: "a7540bffe7c5221239fba655c9ad3796",
                    icon: 'video-surveillance',
                    component: VideoSurveillance
                },
                // 拌合站、
                // 钢筋加工厂、智能张拉、智能压浆、自动喷淋
                // {
                //     key: '/app/monitor-management/grouting-g',
                //     title: '拌合站',
                //     icon: 'video-surveillance',
                //     component: VideoSurveillance
                // },
                // {
                //     key: '/app/monitor-management/grouting-z',
                //     title: '钢筋加工厂',
                //     icon: 'video-surveillance',
                //     component: VideoSurveillance
                // },
                // {
                //     key: '/app/monitor-management/grouting-l',
                //     title: '智能张拉',
                //     icon: 'video-surveillance',
                //     component: VideoSurveillance
                // },
                // {
                //     key: '/app/monitor-management/grouting-j',
                //     title: '智能压浆',
                //     icon: 'video-surveillance',
                //     component: VideoSurveillance
                // },
                // {
                //     key: '/app/monitor-management/grouting-p',
                //     title: '自动喷淋',
                //     icon: 'video-surveillance',
                //     component: VideoSurveillance
                // },
            ],
        },
        // {
        //     key: '/app/manage',
        //     title: '资料管理',
        //     component: Setting,
        //     icon: 'switcher',
        // },
        {
            key: '/app/remind',
            title: '提醒',
            id:"9c75aedcec3f2c8d4eb26c0bb592310f",
            component: Remind,
            icon: 'switcher',
            redirect: "/app/remind/process-remind",
            subs: [
                {
                    key: '/app/remind/process-remind',
                    title: '进度提醒',
                    id:"3bd40ee75c5ac5b17b4f96f35e3a6bc4",
                    icon: 'schedule-setting',
                    component: ProcessRemind
                },
                // {
                //     key: '/app/remind/detail-remind',
                //     title: '材料库存预警',
                //     icon: 'schedule-setting',
                //     component: DetailRemind
                // },
                // {
                //     key: '/app/remind/device-remind',
                //     title: '设备预警',
                //     icon: 'schedule-setting',
                //     component: ProcessRemind
                // },
            ],
        },
        
    ]
}