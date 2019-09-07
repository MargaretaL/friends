/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friend_Friend$ref: FragmentReference;
declare export opaque type Friend_Friend$fragmentType: Friend_Friend$ref;
export type Friend_Friend = {|
  +id: string,
  +firstName: ?string,
  +lastName: ?string,
  +gender: ?string,
  +language: ?string,
  +email: ?string,
  +image: ?string,
  +$refType: Friend_Friend$ref,
|};
export type Friend_Friend$data = Friend_Friend;
export type Friend_Friend$key = {
  +$data?: Friend_Friend$data,
  +$fragmentRefs: Friend_Friend$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Friend_Friend",
  "type": "Friend",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "firstName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lastName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "gender",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "language",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c6586275f65be2bb5d69abc76aba04a1';
module.exports = node;
