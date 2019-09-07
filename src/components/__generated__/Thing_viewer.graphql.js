/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Friend_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Thing_viewer$ref: FragmentReference;
declare export opaque type Thing_viewer$fragmentType: Thing_viewer$ref;
export type Thing_viewer = {|
  +id: string,
  +friends: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: ?string,
      |}
    |}>
  |},
  +$fragmentRefs: Friend_viewer$ref,
  +$refType: Thing_viewer$ref,
|};
export type Thing_viewer$data = Thing_viewer;
export type Thing_viewer$key = {
  +$data?: Thing_viewer$data,
  +$fragmentRefs: Thing_viewer$ref,
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
  "name": "Thing_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "Friend_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4171050641b9d443c93df592c3523979';
module.exports = node;
