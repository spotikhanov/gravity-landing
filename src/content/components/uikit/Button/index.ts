import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Button'};

export const buttonConfig = {
    id: 'button',
    title: 'Button',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./ButtonWrapper').then((mod) => mod.ButtonWrapper)),
        props: {
            view: {
                type: 'select',
                values: mappingOptions([
                    'normal',
                    'action',
                    'raised',
                    'outlined',
                    'outlined-action',
                    'outlined-info',
                    'outlined-success',
                    'outlined-warning',
                    'outlined-danger',
                    'outlined-utility',
                    'flat',
                    'flat-action',
                    'flat-info',
                    'flat-success',
                    'flat-warning',
                    'flat-danger',
                    'flat-utility',
                    'flat-secondary',
                    'normal-contrast',
                    'outlined-contrast',
                    'flat-contrast',
                ]),
                defaultValue: 'normal',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            pin: {
                type: 'select',
                values: mappingOptions([
                    'round-round',
                    'brick-brick',
                    'clear-clear',
                    'round-brick',
                    'brick-round',
                    'round-clear',
                    'clear-round',
                    'brick-clear',
                    'clear-brick',
                    'circle-circle',
                    'circle-brick',
                    'brick-circle',
                    'circle-clear',
                    'clear-circle',
                ]),
                defaultValue: 'round-round',
            },
            selected: {
                type: 'switch',
                defaultValue: false,
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            loading: {
                type: 'switch',
                defaultValue: false,
            },
            startIcon: {
                type: 'switch',
                defaultValue: false,
            },
            endIcon: {
                type: 'switch',
                defaultValue: false,
            },
            onlyIcon: {
                type: 'switch',
                defaultValue: false,
            },
            width: {
                type: 'radioButton',
                values: mappingOptions(['auto', 'max']),
                defaultValue: 'auto',
            },
            children: {
                type: 'input',
                defaultValue: 'Button',
            },
        },
    },
};
