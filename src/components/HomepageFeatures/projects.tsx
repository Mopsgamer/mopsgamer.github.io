import { Icon } from "@iconify/react"
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from './styles.module.css';

export interface PackageJSON {
    name: string;
    version: string;
    description?: string;
    keywords?: string[];
}

export type ProjectProps = {
    icon?: string;
    title: string;
    repoFork?: string;
    npmName?: string;
    repo?: string;
    description?: string;
}

interface FeatureButtonProps {
    icon: string;
    'aria-label': string;
    link?: string;
    children?: React.ReactNode;
}

function FeatureButton(props: FeatureButtonProps) {
    const { icon, link, children } = props
    return (
        <a aria-label={props['aria-label']} href={link} className={clsx({ 'disabled': !link }, 'button center--vert button--block button--link')} style={{ gap: '5px' }}>
            <Icon icon={icon} height={24}></Icon>{children}
        </a>
    )
}

function Project(project: ProjectProps) {
    const { title, npmName, description, repo, repoFork, icon = 'bx:package' } = project
    const [info, setInfo] = useState<PackageJSON | undefined>(undefined)

    useEffect(() => {
        if (!npmName) {
            return;
        }

        scan({ ...project, npmName }).then(pkgInfo => {
            if (pkgInfo) {
                setInfo(pkgInfo)
            }
        })
    })

    return (
        <div className={clsx('col col--5 card shadow--tl padding-vert--md')}>
            <div className={clsx('padding-horiz--md')}>
                <h2 className='col'>
                    <div className='center--vert row' style={{ gap: '10px' }}>
                        <Icon icon={npmName ? 'ri:npmjs-fill' : repoFork ? 'octicon:repo-forked-16' : icon} inline={true} height={48}></Icon>
                        {title}
                    </div>
                    {!npmName?undefined:
                    <a href={`https://www.npmjs.com/package/${npmName}`} className='center--vert row padding-vert--sm note'>{npmName}{typeof info?.version === 'string' ? '@' + info.version : ''}</a>
                    }
                    <div className="row pills" style={{ fontSize: "small" }}>
                        {info?.keywords?.map(tag => (<span className="badge badge--secondary">{tag}</span>))}
                    </div>
                </h2>
                <p>{description || info?.description || 'No description.'}</p>
            </div >
            <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                {!repo ? undefined :
                    <FeatureButton aria-label={`Open ${title} repository`} icon='octicon:repo-16' link={"https://github.com/" + repo}>Repository</FeatureButton>
                }
                {!repoFork ? undefined :
                    <FeatureButton aria-label={`Open ${title} repository`} icon='octicon:repo-forked-16' link={"https://github.com/" + repoFork}>Parent repo</FeatureButton>
                }
            </div>
        </div >
    );
}

export function fromList(title: string, list: ProjectProps[]): JSX.Element {
    return list.length < 1 ? undefined :
        <section className={clsx(styles.features)}>
            <div className={clsx('container col')}>
                <h1 className="hero__title">{title}</h1>
                {/* <p className="hero__subtitle">text</p> */}
                <div className="container row" style={{ gap: '20px', width: "auto" }}>
                    {list.map((props, idx) => (
                        <Project key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
}

async function scan(project: ProjectProps & { npmName: string }): Promise<PackageJSON | undefined> {
    const uriPackageJsonNpm = 'https://cdn.jsdelivr.net/npm/' + project.npmName + '/package.json'
    const uriPackageJsonGh = 'https://cdn.jsdelivr.net/gh/' + project.repo + '/package.json'
    try {
        let response = await fetch(encodeURI(uriPackageJsonNpm))
        if (!response.ok) {
            response = await fetch(encodeURI(uriPackageJsonGh))
        }
        const json = await response.json()
        return json
    } catch (error) {
        return undefined
    }
}