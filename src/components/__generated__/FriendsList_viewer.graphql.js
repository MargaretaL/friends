/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Friend_Friend$ref = any;
type Friend_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FriendsList_viewer$ref: FragmentReference;
declare export opaque type FriendsList_viewer$fragmentType: FriendsList_viewer$ref;
export type FriendsList_viewer = {|
  +friends: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: ?string,
        +lastName: ?string,
        +$fragmentRefs: Friend_Friend$ref,
      |}
    |}>
  |},
  +id: string,
  +$fragmentRefs: Friend_viewer$ref,
  +$refType: FriendsList_viewer$ref,
|};
export type FriendsList_viewer$data = FriendsList_viewer;
export type FriendsList_viewer$key = {
  +$data?: FriendsList_viewer$data,
  +$fragmentRefs: FriendsList_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "FriendsList_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "friends",
      "storageKey": null,
      "args": null,
      "concreteType": "FriendConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "FriendEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Friend",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
                  "kind": "FragmentSpread",
                  "name": "Friend_Friend",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    },
    (v0/*: any*/),
    {
      "kind": "FragmentSpread",
      "name": "Friend_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e21c9c6f205d15b10ea097b27c337027';
module.exports = node;
