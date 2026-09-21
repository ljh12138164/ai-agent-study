import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Comments } from '@/components/Comments'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: any) {
  return {
    ...docsComponents,
    wrapper: (props: any) => {
      const DefaultWrapper = docsComponents.wrapper
      return DefaultWrapper({
        ...props,
        bottomContent: (
          <>
            {props.bottomContent}
            <Comments />
          </>
        ),
      })
    },
    ...components,
  }
}
