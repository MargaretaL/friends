/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FriendsList_viewer$ref = any;
type Thing_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friends_viewer$ref: FragmentReference;
declare export opaque type Friends_viewer$fragmentType: Friends_viewer$ref;
export type Friends_viewer = {|
  +id: string,
  +$fragmentRefs: FriendsList_viewer$ref & Thing_viewer$ref,
  +$refType: Friends_viewer$ref,
|};
export type Friends_viewer$data = Friends_viewer;
export type Friends_viewer$key = {
  +$data?: Friends_viewer$data,
  +$fragmentRefs: Friends_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Friends_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FriendsList_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Thing_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '030662eb896238bd77c1ff28e7736a29';
module.exports = node;
