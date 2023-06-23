/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  delegate: [
    "maintain/delegate/delegate",
  ],

  govern: [
    {
      type: "html",
      value: "Polygon Governance",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "Polygon Improvement Proposals (PIPs)",
      link: {
        type: "generated-index",
      },
      items: [
        "maintain/govern/pips/pips-overview",
        "maintain/govern/pips/how-to-propose",
        "maintain/govern/pips/pips-forum",
        "maintain/govern/pips/pips-community-guidelines",
      ],
    },
    "maintain/govern/governance-pos",
  ],

  operate: ["operate/technical-requirements", "miden/user_docs/main"],

  operatepos: [
    "operate/technical-requirements",
    "operate/snapshot-instructions-heimdall-bor",
    {
      type: "category",
      label: "Run a Full Node",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "operate/full-node-deployment",
        "operate/full-node-binaries",
        "operate/full-node-docker",
        "operate/full-node",
        "operate/full-node-gcp",
      ],
    },
    "operate/network-rpc-endpoints",
    "operate/default-ports",
    /*"operate/access-node-alchemy",*/
    {
      type: "category",
      label: "Setup Archive Node",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "operate/archive-node",
        "operate/erigon-client",
        "operate/archive-node-nodereal",
      ],
    },
  ],

  develop: [
    {
      type: "html",
      value: "Developer Hub",
      className: "sidebar-title",
    },
    "develop/getting-started",
    "develop/developer-resources",
    {
      type: "category",
      label: "Wallets",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/wallets/getting-started",
        {
          type: "category",
          label: "Polygon Wallet Suite",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/wallets/polygon-web-wallet/web-wallet-v3-guide",
            "faq/adding-a-custom-token",
          ],
        },
        {
          type: "category",
          label: "Third-Party Apps",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Metamask",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/metamask/overview",
                "develop/metamask/hello",
                "develop/metamask/config-polygon-on-metamask",
                "develop/metamask/custom-tokens",
                "develop/metamask/multiple-accounts",
              ],
            },
            {
              type: "category",
              label: "Wallet Link",
              link: {
                type: "generated-index",
              },
              items: ["develop/metamask/config-polygon-on-wallet-link"],
            },

            {
              type: "category",
              label: "Venly",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/wallets/venly/intro",
                "develop/wallets/venly/create-wallet",
                "develop/wallets/venly/network",
                "develop/wallets/venly/custom-tokens",
              ],
            },
            "develop/wallets/fortmatic",
            "develop/wallets/portis",
            "develop/wallets/torus",
            "develop/wallets/walletconnect",
            "develop/wallets/slashauth",
            "develop/wallets/plaid-wallet-onboard",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "operate/gas-token",
        "develop/nft-tutorial",
        "operate/mapped-tokens",
      ],
    },
    {
      type: "category",
      label: "Smart Contracts",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Deploying Contracts",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/thirdweb",
            "develop/alchemy",
            "develop/quicknode",
            "develop/chainstack",
            "develop/chainide",
            "develop/remix",
            "develop/truffle",
            "develop/hardhat",
            "develop/replit",
            "develop/getblock",
          ],
        },
        "operate/genesis-contracts",
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "develop/eip1559",
        {
          type: "category",
          label: "Account Abstraction",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/meta-transactions/account-abstraction",
            "develop/meta-transactions/eip4337",
            "develop/meta-transactions/meta-transactions",
            "develop/meta-transactions/network-agnostics",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Bridges",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "develop/ethereum-polygon/getting-started",
        "develop/ethereum-polygon/submit-mapping-request",
        {
          type: "category",
          label: "FxPortal",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/l1-l2-communication/fx-portal",
            "develop/ethereum-polygon/mintable-assets",
            "develop/l1-l2-communication/state-transfer",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Oracles",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/api3",
        {
          type: "category",
          label: "Band Protocol",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/oracles/bandchain",
            "develop/oracles/bandstandarddataset",
          ],
        },
        "develop/oracles/chainlink",
        "develop/oracles/optimisticoracle",
        "develop/oracles/razor",
        "develop/oracles/tellor",
      ],
    },
    {
      type: "category",
      label: "Storage",
      link: {
        type: "generated-index",
      },
      items: ["develop/ipfs", "develop/filecoinhelpers", "develop/nftstorage"],
      items: [
        "develop/ipfs",
        "develop/filecoinhelpers",
        "develop/crusthelpers",
        "develop/nftstorage",
      ],
    },
    {
      type: "category",
      label: "Data",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Indexing and Querying",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/data/the-graph",
            "develop/data/graph-data",
            "develop/data/graph-entities",
            "develop/data/graph-queries",
            "develop/data/covalent",
          ],
        },
        "develop/dapp-fauna-polygon-react",
      ],
    },
    "develop/did-implementation",
    {
      type: "category",
      label: "Miscellaneous",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/tools/matic-faucet",
        "develop/tools/polygon-gas-station",
      ],
    },
  ],

  maintain: [
    "maintain/validate/validator-index",
    {
      type: "category",
      label: "Validator Overview",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "maintain/validator/architecture",
        "maintain/validator/responsibilities",
        "maintain/validator/core-components/staking",
        "maintain/polygon-basics/liquid-delegation",
        "maintain/validator/rewards",
        {
          type: "category",
          label: "Core Components",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validator/core-components/heimdall-chain",
            "maintain/validator/core-components/bor-chain",
            "maintain/validator/core-components/checkpoint-mechanism",
            "maintain/validator/core-components/key-management",
            "maintain/validator/core-components/derivatives",
            "maintain/validator/core-components/proposers-producers-selection",
            "maintain/validator/core-components/proposer-bonus",
            "maintain/validator/core-components/transaction-fees",
            "maintain/validator/core-components/state-sync-mechanism",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Validate",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Node Deployment",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-node-system-requirements",
            "maintain/validate/run-validator-binaries",
            "maintain/validate/run-validator-ansible",
            "maintain/validate/run-validator",
          ],
        },
        {
          type: "category",
          label: "Node Management",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/port-management",
            "maintain/validate/change-signer-address",
          ],
        },
        {
          type: "category",
          label: "Staking Operations",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-staking-operations",
            "maintain/validate/validator-commission-operations",
          ],
        },
        {
          type: "category",
          label: "Validator Performance Metrics",
          link: {
            type: "generated-index",
          },
          items: ["maintain/validate/validator-performance-overview"],
        },
        {
          type: "category",
          label: "Knowledge Base",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/kb/known-issues",
            "maintain/validate/kb/how-to",
            {
              type: "category",
              label: "Additional Information",
              link: {
                type: "generated-index",
              },
              items: ["maintain/validate/kb/additional-info/port-config"],
            },
          ],
        },
        "maintain/validate/technical-prerequisites",
        "maintain/reporting-issues",
        "maintain/glossary",
      ],
    },
  ],
  maticjs: [
    {
      type: "html",
      value: "MaticJS SDK",
      className: "sidebar-title",
    },
    "develop/ethereum-polygon/matic-js/get-started",
    "develop/ethereum-polygon/matic-js/api-architecture",
    "develop/ethereum-polygon/matic-js/installation",
    {
      type: "category",
      label: "Setup",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/setup/index",
        "develop/ethereum-polygon/matic-js/setup/web3",
        "develop/ethereum-polygon/matic-js/setup/ethers",
      ],
    },
    {
      type: "category",
      label: "PoS Network",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/pos/index",
        {
          type: "category",
          label: "ERC20",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/erc20/index",
            "develop/ethereum-polygon/matic-js/pos/erc20/get-balance",
            "develop/ethereum-polygon/matic-js/pos/erc20/approve",
            "develop/ethereum-polygon/matic-js/pos/erc20/approve-max",
            "develop/ethereum-polygon/matic-js/pos/erc20/get-allowance",
            "develop/ethereum-polygon/matic-js/pos/erc20/deposit",
            "develop/ethereum-polygon/matic-js/pos/erc20/transfer",
            "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-start",
            "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit",
            "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit-faster",
            "develop/ethereum-polygon/matic-js/pos/erc20/is-withdraw-exited",
          ],
        },
        {
          type: "category",
          label: "ERC721",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/erc721/index",
            "develop/ethereum-polygon/matic-js/pos/erc721/get-tokens-count",
            "develop/ethereum-polygon/matic-js/pos/erc721/get-token-id-at-index-for-user",
            "develop/ethereum-polygon/matic-js/pos/erc721/get-all-tokens",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-approved",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",
            "develop/ethereum-polygon/matic-js/pos/erc721/approve",
            "develop/ethereum-polygon/matic-js/pos/erc721/approve-all",
            "develop/ethereum-polygon/matic-js/pos/erc721/deposit",
            "develop/ethereum-polygon/matic-js/pos/erc721/deposit-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/transfer",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-with-meta-data",
          ],
        },
        {
          type: "category",
          label: "ERC1155",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/erc1155/get-balance",
            "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all",
            "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all-for-mintable",
            "develop/ethereum-polygon/matic-js/pos/erc1155/is-approved-all",
            "develop/ethereum-polygon/matic-js/pos/erc1155/deposit",
            "develop/ethereum-polygon/matic-js/pos/erc1155/deposit-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited",
            "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/transfer",
          ],
        },
        "develop/ethereum-polygon/matic-js/pos/is-check-pointed",
        "develop/ethereum-polygon/matic-js/pos/is-deposited",
        "develop/ethereum-polygon/matic-js/pos/deposit-ether",
      ],
    },
    "develop/ethereum-polygon/matic-js/fx-portal",
    "develop/ethereum-polygon/matic-js/set-proof-api",
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/advanced/abi-manager",
        "develop/ethereum-polygon/matic-js/advanced/plugin",
        "develop/ethereum-polygon/matic-js/advanced/exit-util",
      ],
    },
  ],

  contribute: [
    {
      type: "category",
      label: "Become a Contributor",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "contribute/contributor-guidelines",
        "contribute/bug-bounty-program",
        "contribute/wiki-maintainers",
      ],
    },
    {
      type: "category",
      label: "Style Guide",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["contribute/writing-style", "contribute/tutorial-template"],
    },
    {
      type: "category",
      label: "Translations",
      link: {
        type: "generated-index",
      },
      items: ["contribute/translate"],
    },
  ],

  pos: [
    {
      type: "html",
      value: "Polygon PoS",
      className: "sidebar-title",
    },
    "pos/polygon-architecture",
    {
      type: "category",
      label: "Architecture",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Heimdall",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/heimdall/encoder",
                "pos/heimdall/transactions",
                "pos/heimdall/stdtx",
                "pos/heimdall/types",
                "pos/heimdall/validators",
                "pos/heimdall/checkpoint",
                "pos/heimdall/validator-key-management",
                "pos/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/heimdall/modules/auth",
                "pos/heimdall/modules/bank",
                "pos/heimdall/modules/governance",
                "pos/heimdall/modules/staking",
                "pos/heimdall/modules/checkpoint",
                "pos/heimdall/modules/bor",
                "pos/heimdall/modules/topup",
                "pos/heimdall/modules/clerk",
                "pos/heimdall/modules/chainmanager",
              ],
            },
            "pos/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/bor/overview",
            "pos/bor/bor",
            "pos/bor/core_concepts",
            "pos/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/contracts/stakingmanager",
            "pos/contracts/delegation",
          ],
        },
        {
          type: "category",
          label: "State Sync",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/state-sync/state-sync",
            "pos/state-sync/how-state-sync-works",
          ],
        },
        "home/architecture/security-models",
      ],
    },
  ],
  miden: [
    {
      type: "html",
      value: "Polygon Miden",
      className: "sidebar-title",
    },
    "miden/index",
    {
      type: "category",
      label: "Miden VM",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "miden/intro/main",
        "miden/intro/architecture",
        "miden/intro/performance",
        {
          type: "category",
          label: "Stack Specifications",
          link: {
            type: "generated-index",
          },
          items: [
            "miden/design/main",
            "miden/design/programs",
            {
              type: "category",
              label: "Program decoder",
              link: {
                type: "generated-index",
              },
              items: [
                "miden/design/decoder/main",
                "miden/design/decoder/constraints",
              ],
            },
            {
              type: "category",
              label: "Operand stack",
              link: {
                type: "generated-index",
              },
              items: [
                "miden/design/stack/main",
                "miden/design/stack/op_constraints",
                "miden/design/stack/system_ops",
                "miden/design/stack/field_ops",
                "miden/design/stack/u32_ops",
                "miden/design/stack/stack_ops",
                "miden/design/stack/io_ops",
                "miden/design/stack/crypto_ops",
              ],
            },
            "miden/design/range",
            {
              type: "category",
              label: "Chiplets",
              link: {
                type: "generated-index",
              },
              items: [
                "miden/design/chiplets/main",
                "miden/design/chiplets/hasher",
                "miden/design/chiplets/bitwise",
                "miden/design/chiplets/memory",
              ],
            },
            "miden/design/multiset",
          ],
        },
        "miden/resources",
      ],
    },
    {
      type: "category",
      label: "Developer Guides",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "miden/user_docs/main",
        "miden/user_docs/usage",
        {
          type: "category",
          label: "Miden Assembly Language",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "miden/user_docs/assembly/main",
            "miden/user_docs/assembly/code_organization",
            "miden/user_docs/assembly/flow_control",
            "miden/user_docs/assembly/field_operations",
            "miden/user_docs/assembly/u32_operations",
            "miden/user_docs/assembly/stack_manipulation",
            "miden/user_docs/assembly/io_operations",
            "miden/user_docs/assembly/cryptographic_operations",
            "miden/user_docs/assembly/execution-context",
          ],
        },
        {
          type: "category",
          label: "Miden Standard Library",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "miden/user_docs/stdlib/main",
            "miden/user_docs/stdlib/crypto/hashes",
            "miden/user_docs/stdlib/crypto/fri",
            "miden/user_docs/stdlib/math/u64",
            "miden/user_docs/stdlib/sys",
            "miden/user_docs/stdlib/mem",
          ],
        },
      ],
    },
  ],

  faq: [
    "faq/technical-faqs",
    "faq/commit-chain-multisigs",
    "faq/validator-faq",
    "faq/staking-faq",
    "faq/wallet-bridge-faq",
    "faq/consensys-framework",
  ],

  // #####################################################################

  /* Polygon ID docs here: https://0xpolygonid.github.io/tutorials/
  polygonid: [
    {
      type: 'html',
      value: 'Polygon ID',
      className: 'sidebar-title',
    },
    "polygonid/overview",
    "polygonid/issuer/issuer-overview",
    {
      type: "category",
      label: "Verifier",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "polygonid/verifier/verifier-overview",
        {
          type: "category",
          label: "Off-chain verification",
          link: {
            type: "generated-index",
          },
          items: [
            "polygonid/verifier/verification-library/verifier-library-intro",
            "polygonid/verifier/verification-library/verifier-set-up",
            {
              type: "category",
              label: "APIs",
              link: {
                type: "generated-index",
              },
              items: [
                "polygonid/verifier/verification-library/config",
                "polygonid/verifier/verification-library/request-api-guide",
                "polygonid/verifier/verification-library/verification-api-guide",
                "polygonid/verifier/verification-library/zk-query-language",
                "polygonid/verifier/verification-library/jwz",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "On-chain verification",
          link: {
            type: "generated-index",
          },
          items: ["polygonid/verifier/on-chain-verification/overview"],
        },
      ],
    },
    "polygonid/contracts/overview",
    "polygonid/wallet/wallet-overview",
  ],
*/

  // #####################################################################

  supernets: [
    {
      type: "html",
      value: "Polygon Supernets",
      className: "sidebar-title",
    },
    "supernets/index",
    "supernets/operate/supernets-quick-start",
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "supernets/get-started/what-are-supernets",
        "supernets/get-started/why-supernets",
      ],
    },
    {
      type: "category",
      label: "System Design",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "supernets/design/overview",
        {
          type: "category",
          label: "PolyBFT Consensus",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/design/consensus/polybft/polybft-overview",
            "supernets/design/consensus/polybft/ibft-overview",
          ],
        },
        {
          type: "category",
          label: "Cross-Chain Bridge",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/design/bridge/overview",
            "supernets/design/bridge/statesync",
            "supernets/design/bridge/checkpoint",
            {
              type: "category",
              label: "Native assets",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/design/bridge/assets/erc/erc20",
                "supernets/design/bridge/assets/erc/erc721",
                "supernets/design/bridge/assets/erc/erc1155",
              ],
            },
          ],
        },
        "supernets/design/supernets-libp2p",
        {
          type: "category",
          label: "EVM Runtime",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/design/runtime/supernets-runtime",
            "supernets/design/runtime/supernets-runtime-allowlist",
          ],
        },
        "supernets/design/supernets-blockchain",
        "supernets/design/supernets-mempool",
        "supernets/design/supernets-txpool",
        "supernets/design/supernets-txrelayer",
        "supernets/design/supernets-json-rpc",
        "supernets/design/supernets-grpc",
      ],
    },
    {
      type: "category",
      label: "Build a Supernet",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Prepare Your Environment",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
              "supernets/operate/supernets-requirements",
              "supernets/operate/supernets-install",
            ],
        },
        "supernets/operate/supernets-ibft-to-polybft",
        {
          type: "category",
          label: "Deploy a Supernet",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/operate/deploy/supernets-deploy-index",
            "supernets/operate/deploy/supernets-spawn-test-chain",
            "supernets/operate/deploy/supernets-how-to-generate-genesis",
            "supernets/operate/deploy/supernets-how-to-configure-rootchain",
            "supernets/operate/deploy/supernets-genesis-validators",
            "supernets/operate/deploy/supernets-how-to-start",
          ],
        },
        {
          type: "category",
          label: "Operate Your Supernet",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Access Control",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                  "supernets/operate/deploy/access-control/supernets-allowlist-add-remove",
                ],
            },
            {
              type: "category",
              label: "Staking",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                  "supernets/operate/deploy/staking/supernets-how-to-stake",
                  "supernets/operate/deploy/staking/supernets-unstake",
                ],
            },
            {
              type: "category",
              label: "Transfers",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                  "supernets/operate/deploy/transfers/supernets-cross-chain-deposit",
                  "supernets/operate/deploy/transfers/supernets-cross-chain-withdraw",
                ],
            },
            ],
        },
        ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "supernets/operate/supernets-param-reference",
        {
          type: "category",
          label: "Smart Contract Interfaces",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "ERC-20",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/erc20/native-erc20",
                "supernets/interfaces/erc20/childerc20",
                "supernets/interfaces/erc20/childerc20-predicate",
                "supernets/interfaces/erc20/rooterc20-predicate",
              ],
            },
            {
              type: "category",
              label: "ERC-721",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/erc721/childerc721",
                "supernets/interfaces/erc721/childerc721-predicate",
                "supernets/interfaces/erc721/rooterc721-predicate",
              ],
            },
            {
              type: "category",
              label: "ERC-1155",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/erc1155/childerc1155",
                "supernets/interfaces/erc1155/childerc1155-predicate",
                "supernets/interfaces/erc1155/rooterc1155-predicate",
              ],
            },
            "supernets/interfaces/eip1559-interface",
            {
              type: "category",
              label: "Network",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/network/checkpoint-manager",
                "supernets/interfaces/network/exit-helper",
                "supernets/interfaces/network/state-receiver",
                "supernets/interfaces/network/state-sender",
              ],
            },
            {
              type: "category",
              label: "Validators",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/validators/validator",
                "supernets/interfaces/validators/validator-set-base",
                "supernets/interfaces/validators/root-validator-set",
              ],
            },
            {
              type: "category",
              label: "Staking",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/staking/stake-manager-interface",
                "supernets/interfaces/staking/supernet-manager-interface",
                "supernets/interfaces/staking/custom-supernet-manager-interface",
              ],
            },
            {
              type: "category",
              label: "Cryptography",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/cryptography/bls",
                "supernets/interfaces/cryptography/bn256g2",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "RPC API Reference",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "supernets/api/json-rpc-eth",
            "supernets/api/json-rpc-net",
            "supernets/api/json-rpc-web3",
            "supernets/api/json-rpc-txpool",
            "supernets/api/json-rpc-debug",
            "supernets/api/json-rpc-bridge",
          ],
        },
        "supernets/operate/supernets-performance",
      ],
    },
    "supernets/supernets-faq",
    "supernets/supernets-changelog",
  ],
};
