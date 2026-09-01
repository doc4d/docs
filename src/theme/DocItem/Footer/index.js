/**
 * Swizzled (ejected) from @docusaurus/theme-classic.
 *
 * Replaces the single "Comment on this page" link with a compact toolbar of
 * icon buttons (copy link, comment, and an "Ask AI" menu). The tags row and the
 * "last updated" info are preserved from the original component.
 */
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import LastUpdated from '@theme/LastUpdated';
import PageActions from './PageActions';

export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags, source} = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayLastUpdated = !!(lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayLastUpdated || !!editUrl;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      <div
        className={clsx(
          'row margin-top--sm',
          ThemeClassNames.docs.docFooterEditMetaRow,
        )}>
        <div className="col">
          <PageActions editUrl={editUrl} source={source} />
        </div>
        <div className="col text--right">
          {canDisplayLastUpdated && (
            <LastUpdated
              lastUpdatedAt={lastUpdatedAt}
              lastUpdatedBy={lastUpdatedBy}
            />
          )}
        </div>
      </div>
    </footer>
  );
}
