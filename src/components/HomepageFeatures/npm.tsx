import { Icon } from "@iconify/react"
import { useState, useEffect } from "react";
import clsx from "clsx";

export interface PackageJSON {
    name: string;
    version: string;
    description?: string;
    keywords?: string[];
}

export type NPMProjectProps = {
    title: string;
    name: string;
    repo: string;
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

function NPMProject(project: NPMProjectProps) {
    const { title, name, description, repo } = project
    const [info, setInfo] = useState<PackageJSON | undefined>(undefined)

    useEffect(() => {
        scan(project).then(pkgInfo => {
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
                        <a className='center--vert' href={`https://www.npmjs.com/package/${name}`} aria-label='Discover on npm'><Icon icon='ri:npmjs-fill' inline={true} height={48}></Icon></a>
                        {title}
                    </div>
                    <div className='center--vert row padding-vert--sm note'>{name}{typeof info?.version === 'string' ? '@' + info.version : ''}</div>
                    <div className="row pills" style={{ fontSize: "small" }}>
                        {info?.keywords?.map(tag => (<span className="badge badge--secondary">{tag}</span>))}
                    </div>
                </h2>
                <p>{description || info?.description || 'No description.'}</p>
            </div >
            <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                <FeatureButton aria-label={`Open ${title}repository`} icon='octicon:repo-16' link={repo}>Repository</FeatureButton>
            </div>
        </div >
    );
}

export function fromList(list: NPMProjectProps[]): JSX.Element {
    return list.length < 1 ? undefined : (
        <div className="container">
            <h1 className="hero__title">NPM packages</h1>
            {/* <p className="hero__subtitle">text</p> */}
            <div className="container row" style={{gap: '20px'}}>
                {list.map((props, idx) => (
                    <NPMProject key={idx} {...props} />
                ))}
            </div>
        </div>
    )
}

async function scan(project: NPMProjectProps): Promise<PackageJSON | undefined> {
    const uriPackageJsonNpm = 'https://cdn.jsdelivr.net/npm/' + project.name + '/package.json'
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