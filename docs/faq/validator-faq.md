---
id: validator-faq
title: Node FAQ
description: Common questions on validator operations
keywords:
  - docs
  - matic
  - polygon
  - validator
  - faq
image: https://wiki.polygon.technology/img/polygon-logo.png
---

## How can I reserve a Validator spot?

We currently manage validator evaluation through communications / interview before we onboard a validator into the Polygon network. We are also working on building an automated application and admission process, inclusive of questionnaire, scoring logic, and ranking to streamline the application process.

Once complete, this process of validator admission will be passed to the community for approval via governance, and subsequently implemented if agreed upon.

## What are the different states a Validator can be in?

* **Active**: Validator is in the current validator set, produces blocks at the Bor layer, participates in Heimdall consensus and commits checkpoint transactions to the Ethereum mainnet.
* **Notice**: Validator sends a transaction to unbond. Before entering into the unbonding period, validator needs to be in active state creating, signing and proposing blocks for a certain time.
* **Unbonding**: Validator is inactive in this state and thus earns no reward.

## Is there a minimum amount of MATIC required to stake to become a validator?

The minimum is 1 MATIC. We had earlier mentioned that we are thinking of having a minimum self stake requirement from the validators, as we do hope that validators also have their skin in the game.

However, since we will be moving to a robust replacement strategy as the number of validator slots are limited as of now, this does not need any minimum self stake requirement. It is however, logical that over time, the average / median stake by a validator will tend upwards and become substantial.

## How can a new Validator replace an existing one?

There is limited space for accepting new validators. New validators can only join the active set when a currently active validator unbonds.

A new auction process for validator replacement will be rolled out.

## Heimdall shows "Failed Sanity Checks"

`Addressbook` warnings can be ignored without an issue most of the time. If your node is connected to sufficient number of peers, these kind of errors can be ignored. Your `pex` is just trying to re-establish its connections with peers already present in `addrbook.json`.

## Heimdall and Bor logs are fine and even my bridge is running correctly but my node is not signing any checkpoints

This could happen if you have missed adding the `ETH_RPC_URL` in the `heimdall-config.toml` file. Please check if you have added it. If not, ensure that you add the correct URL and then restart your Heimdall service.

## Can I start Bor before Heimdall is completely synced?

No, you cannot. If you start your Bor without Heimdall being completely synced, you face issues on your Bor.

## Validator Heimdall is unable to connect to peers

This typically means that your sentry Heimdall is running into issues. Check your sentry Heimdall and see if the service is running fine. If the service is stopped, then restarting the service on your sentry should resolve this issue. Similarly, after fixing your sentry, a restart of your Heimdall service should also resolve the problem.

## Heimdall shows "pong timeout"

Full error:

```bash
E[2021-03-01|13:19:12.252] Connection failed @ sendRoutinemodule=p2ppeer=3d1f71344c2d3262eac724c22f8266d9b3e41925@3.217.49.94:26656 conn=MConn{3.217.49.94:26656} err="pong timeout"
```

Usually restarting the Heimdall service should resolve the problem.

## Heimdall shows "Error: Wrong Block.Header.AppHash. Expected xxxx"

This error usually occurs when Heimdall service is stuck on a block and there is no rewind option available on Heimdall.

**Solution:**
To resolve this:
* Reset Heimdall completely
* Sync from the snapshot again

### Reset Heimdall

Reset Heimdall with the following commands:

```
sudo service heimdalld stop
heimdalld unsafe-reset-all
```

### Sync Heimdall from Snapshot

This is how you sync Heimdall from a Snapshot:

```
wget -c <Snapshot URL>
tar -xzvf <snapshot file> -C <HEIMDALL_DATA_DIRECTORY>
```

Then start Heimdall services again. Refer to:

* [Run a Validator Node with Ansible](/maintain/validate/run-validator-ansible.md)
* [Run a Validator Node from Binaries](/maintain/validate/run-validator-binaries.md)

## Heimdall shows "dpkg: error processing archive"

Full error:

```bash
dpkg: error processing archive matic-heimdall_1.0.0_amd64.deb (--install): trying to overwrite '/heimdalld-rest-server.service', which is also in package matic-node 1.0.0
```

This occurs mainly because of a previous installation of Polygon on your machine. To resolve you can run: `sudo dpkg -r matic-node`

## It is not clear which private Key I should add when I generate a validator key

The private key to be used is your wallet's ETH address where your Polygon tokens are stored.

## Is there a way to know if Heimdall is synced?

You can run the following command to check it:

```bash
curl http://localhost:26657/status
```

Check the value of `catching_up`. If it is `false`, then the node is all synced up.

## Where can I find Heimdall account info location?

`/var/lib/heimdall/config`

## Which file do I add the persistent_peers?

You can add the persistent_peers to `/var/lib/heimdall/config/config.toml`.

## Heimdall shows “Did you reset Tendermint without resetting your application's data?”

Reset the Heimdall config data and try running the installation again:

```bash
heimdalld unsafe-reset-all
rm -rf $HEIMDALLDIR/bridge
```

## Heimdall shows a Panic error

Full error:

```bash
panic: Unknown db_backend leveldb, expected either goleveldb or memdb or fsdb
```

Change the config to `goleveldb` in `config.toml`.

## Are the private keys the same for Heimdall and Bor keystore?

Yes, the private key used for generating the validator keys and Bor keystore are the same. The private key used in this instance is your wallet's ETH address where your Polygon tokens are stored.

## Error: (Heimdall) Please repair the WAL file before restarting module=consensus

This issue happens when the WAL file is corrupted.

**Solution:**

Run the following commands:

```bash
WALFILE=~/.heimdalld/data/cs.wal/wal
cp $WALFILE ${WALFILE}.bak
git clone https://github.com/maticnetwork/tendermint.git
cd tendermint
go run scripts/wal2json/main.go $WALFILE > wal.json
rm $WALFILE
go run scripts/json2wal/main.go wal.json $WALFILE
```

## Bor shows 'Looking for peers' and cannot find peers

This could happen when Bor has lost connectivity with other peers. In the case of the validator, this occurs when the connectivity with the sentry has failed.

1. Open the file `~/var/lib/bor/config.toml` on your Sentry node.

2. Add the Trusted nodes, Static Nodes, and

```
[Node.P2P]

TrustedNodes = ["enode://<enode_id_of_validator_node>"]

[Node.P2P]
BootNodes= ["enode://static_node_enode1@ip:port", "enode://static_node_enode2@ip:port", ... ]

StaticNodes = ["enode://static_node_enode1@ip:port", "enode://static_node_enode2@ip:port", ... ]

TrustedNodes = ["enode://<enode_id_of_validator_node>"]
```

3. Now restart Bor: `sudo service bor restart`

Follow the same steps on your validator node and instead of `enode_id_of_validator_node`, you need to provide the `enode_id_of_sentry_node` in TrustedNodes.

:::note

Bootnodes & Static Nodes **can use the same values, are not required on the validator and apply only for sentry and full nodes.**

:::

## Sentry Bor shows 'Looking for peers' and cannot find peers

This could happen when Bor has lost connectivity with other peers. Generally checking the `~/node/bor/start.sh` file should show you your bootnodes. Check if the bootnodes are entered correctly without any formatting issues. If you have made any changes to the file, then please restart your Bor service and check if the issue is resolved.

If the issue persists, contact support team on [Discord](https://discord.com/invite/0xPolygon).

## Bor shows "Failed to prepare header mining at block 0"

This happens because of a formatting issue in your `/var/lib/bor/data/bor/static-nodes.json` file. Ensure there are no space and no additional characters like < / > . If you have made any changes to the file then please restart your Bor service and you should see logs printing.

## Bor shows "30303 or invalid command: /home/ubuntu/.bor/password.txt"

This is because you have not created the Bor keystore and the password file for it. Ensure that you follow all the steps from the guide setup.

## Bor shows "Impossible reorg, please file an issue"

Let these logs be. Your node should ideally not suffer because of this and the issue should be automatically resolved.

If your node is suffering because of this, please contact the support team on [Discord](https://discord.com/invite/0xPolygon).

## Bor shows "Failed to prepare mining for header"

This message is not an error. The message indicates that the Bor node is not the one creating blocks right now.

## Bor shows "Address is required as argument"

This means that you have not added your [signer address](/maintain/glossary.md#signer-address) to the metadata. You can add it using this path `/etc/matic/metadata` . Once the address is added, you can then restart the Bor service and everything should be fine.

## Bor shows "Failed to unlock account (0x...) No key for given address or file"

This error occurs because the path for the `password.txt` file is incorrect.

To fix:

1. Copy the Bor keystore file to `/etc/bor/dataDir/keystore`
1. Copy the `password.txt` file to `/etc/bor/dataDir/`
1. Make sure you have added the correct address in `/etc/bor/metadata`

For binaries:

1. Copy the Bor keystore file to `/var/lib/bor/keystore/`
1. Copy `password.txt` file to `/var/lib/bor/password.txt`

## How to connect to a Web Socket?

Your /var/lib/bor/config.toml should have settings like this:

```json
[jsonrpc]
ipcpath = "/var/lib/bor/bor.ipc"
# ipcdisable = false
# gascap = 50000000
# txfeecap = 5.0
[jsonrpc.http]
    enabled = true
    port = 8545
    host = "0.0.0.0"
    api = ["eth", "net", "web3", "txpool", "bor"]
    vhosts = ["*"]
    corsdomain = ["*"]
    # prefix = ""
[jsonrpc.ws]
    enabled = true
    port = 8546
    # prefix = ""
    host = "0.0.0.0"
    api = ["eth", "net", "web3", "txpool", "bor", "net"]
    origins = ["*"]
```

And then restart Bor for the changes to reflect.

## Node is not signing any checkpoints

Your node not signing checkpoints could be for multiple reasons:

1. Check if your Heimdall service is running correctly on your sentry and validator nodes. If the service has stopped abruptly or you see any errors, try restarting your Heimdall service and see it comes back to normal. If the issue persists, contact support team on [Discord](https://discord.com/invite/0xPolygon).
2. Check your Bor service and see if it has halted abruptly or there are any errors on the logs. Try restarting your Bor service to resolve this issue. If the issue persists, contact support team on [Discord](https://discord.com/invite/0xPolygon).
3. Check if your Heimdall Bridge is running or not or if it has any errors in the logs. Try restarting the service and see if the issue resolves. If the issue persists, contact support team on [Discord](https://discord.com/invite/0xPolygon).

If none of this is the issue, contact support team on [Discord](https://discord.com/invite/0xPolygon).

## How to set up a validator node on the mainnet?

See [Getting Started](/maintain/validate/getting-started.md).

## How to set up a non-validating node?

Check out:

* [Run a Validator Node with Ansible](/maintain/validate/run-validator-ansible.md)
* [Run a Validator Node from Binaries](/docs/maintain/validate/run-validator-binaries.md)

## Why do I have to keep ETH in my signer account?

ETH is required on your [signer account](/maintain/glossary.md#signer-address) because for submitting checkpoints to Ethereum, all transactions require ETH to be used as gas. Hence ETH is required on your signer account.

## Setting up a node with Ansible errors out with "Host not found"

This could be because your `inventory.yml` file may have some formatting issues. Correct them with proper indentation and then try again.

## As a validator do I need to run both a sentry and a validator node?

Yes, you have to run both a sentry and a validator node.

The Polygon ecosystem and architecture demands that you run a sentry + validator setup to ensure that your validator node is not exposed to the public and only your sentry node is.

Your sentry node gleans information / blocks from the network and then relays them to the validator for validation.

## What is the minimum disk space required to run a Validator node?

See [Validator Node System Requirements](/maintain/validate/validator-node-system-requirements.md).

## Bridge shows "Error while fetching mainchain receipt error="

These are normal logs. Do not do anything to your bridge. Let it run as it is.

## Validator Bor is stuck on a block for a long time

This means that your Bor on your sentry is also stuck because your validator gets information from your sentry.

Please check your Bor logs on your sentry and see if everything is okay.

Restart the Bor service one on your Bor and then simultaneously restart your Bor service on your validator as well.

## Can I run multiple sentries for a validator?

Yes, you can.

## Can I run multiple validators using the same signer key?

No. You cannot. Polygon's architecture currently does not allow validators running multiple validator nodes using the same signer key.

## Is there a way to run a light Bor node?

There is no light node option as of now.

* [Run a Full Node on a binary](/operate/full-node-binaries.md)
* [Run a Full Node with Ansible](/operate/full-node-deployment.md)

## What is the uptime percentage calculation on the staking dashboard?

It is calculated as per the last 200 checkpoints submitted to the ones you have actually signed.

## What ports are to be kept open on the sentry node?

You will need to make sure that you open ports 22, 26656 and 30303 to world (0.0.0.0/0) on sentry node firewall.

## What is the command to check the latest block height on Heimdall?

You can run this command `curl localhost:26657/status`.

## What is the command to check the latest block height on Bor?

Run the following command:

```sh
curl  http://<your ip>:8545 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0", "id":1, "method":"bor_getSigners", "params":["0x98b3ea"]}
'
```

## Standard upgrade commands for Heimdall

```bash
cd ~/heimdall
git pull
git checkout <branch tag>
make install
sudo service heimdalld restart
```

The latest version, [Heimdall v.0.3.3](https://github.com/maticnetwork/heimdall/releases/tag/v0.3.3), contains a few enhancements such as:
1. Restricting data size in state sync txs to:
    * **30Kb** when represented in **bytes**
    * **60Kb** when represented as **string**.
2. Increasing the **delay time** between the contract events of different validators to ensure that the mempool doesn't get filled very quickly in case of a burst of events which can hamper the progress of the chain.

The following example shows how the data size is restricted:

```
Data - "abcd1234"
Length in string format - 8
Hex Byte representation - [171 205 18 52]
Length in byte format - 4
```

## Standard upgrade commands for Bor

These are the commands to upgrade Bor:

```bash
cd ~/bor
git pull
git checkout <branch tag>
sudo service bor stop
make bor-all
sudo service bor start
```

## How do I delete remnants of Heimdall and Bor?

If you want to delete the remnants of Heimdall and Bor, you can run the following commands:

Bor:

For Linux package:

```sh
sudo dpkg -i matic-bor
```

And delete Bor directory:

```sh
sudo rm -rf /etc/bor
```

For Binaries:

```sh
sudo rm -rf /etc/bor
```

And:

```sh
sudo rm /etc/heimdall
```

## Bridge shows "Object "start" is unknown"

Check `which bridge` — if it's `/usr/sbin/bridge`, you are not running the right "bridge" program.

Try `~/go/bin/bridge` instead (or `$GOBIN/bridge)`.

## Error: Unable to unmarshall config Error 1 error(s) decoding

Full error:

```
'' has invalid keys: clerk_polling_interval, matic_token, span_polling_interval, stake_manager_contract, stakinginfo_contract
```

This occurs mostly because there are typos, some missing parts or an old config file which is still a remnant. You will need to clear all the remnants and then try setting it up again.

## To stop Heimdall and Bor services

**For Linux packages**:

Stop Heimdall: `sudo service heimdalld stop`

Stop Bor: `sudo service bor stop`, or

1. `ps -aux | grep bor`. Get the PID for Bor and then run the following command.
1. `sudo kill -9 PID`

**For Binaries**:

Stop Heimdall: `pkill heimdalld`

Stop Bridge: `pkill heimdalld-bridge`

Stop Bor: Go to CS-2001/bor and then run, `bash stop.sh`

## To remove Heimdall and Bor directories

**For Linux packages**:

Delete Heimdall: `sudo rm -rf /etc/heimdall/*`

Delete Bor: `sudo rm -rf /etc/bor/*`

**For Binaries**:

Delete Heimdall: `sudo rm -rf /var/lib/heimdall/`

Delete Bor: `sudo rm -rf /var/lib/bor`

## List of common commands

### Where to find Heimdall genesis file

`$CONFIGPATH/heimdall/config/genesis.json`

### Where to find `heimdall-config.toml`

`/etc/heimdall/config/heimdall-config.toml`

### Where to find `config.toml`

`/etc/heimdall/config/config.toml`

### `Where to find heimdall-seeds.txt`

`$CONFIGPATH/heimdall/heimdall-seeds.txt`

### Start Heimdall

`$ sudo service heimdalld start`

### Start Heimdall rest-server

`$ sudo service heimdalld-rest-server start`

### Start Heimdall bridge-server

`$ sudo service heimdalld-bridge start`

### Heimdall logs

`/var/log/matic-logs/`

### Where to find Bor genesis file

`$CONFIGPATH/bor/genesis.json`

### Start Bor

`sudo service bor start`

### Check Heimdall logs

`tail -f heimdalld.log`

### Check Heimdall rest-server

`tail -f heimdalld-rest-server.log`

### Check Heimdall bridge logs

`tail -f heimdalld-bridge.log`

### Check Bor logs

`tail -f bor.log`

### Kill Bor process

**For Linux**

1. `ps -aux | grep bor`. Get the PID for Bor and then run the following command.
1. `sudo kill -9 PID`

**For binaries**

Go to `CS-2003/bor` and then run, `bash stop.sh`

### Diagnosing what went wrong in a node

You can use [this script](https://github.com/maticnetwork/launch/tree/master/scripts/node_diagnostics.sh) to check periodially the sync status of your node.

## How to Troubleshoot Your Node Mining More Zero Blocks

If your node is mining more zero blocks, it's recommended to compare the size of the chaindata directory on both the sentry and validator. If the sizes are not matching, you should clear the chaindata directory that is less in size, and we recommend syncing from a fresh snapshot again.

Steps to clear chaindata:

1. Run the command `rm -r /var/lib/bor/data/bor/chaindata`. This command removes the chaindata directory and all its contents recursively. This step is necessary to clear any corrupted data that might be causing issues with your node.
1. Then, run `mkdir /var/lib/bor/data/bor/chaindata`. This command creates a new, empty chaindata directory, which will be populated with the latest block data when you start syncing your node again. This step is necessary to ensure that your node has a clean slate to work with, and it won't face any issues caused by previous corrupted data.

To sync from a snapshot, please follow the instructions provided [<ins>here</ins>](https://wiki.polygon.technology/docs/operate/snapshot-instructions-heimdall-bor/)

## How to Address a Significant Block Reorg

If your node has suffered a significant reorg, we recommend that you connect with the Polygon Team and share the logs. Our team is continuously working on improving the network's finality in the long term.

## Using Public IP Addresses for `persistent_peers` and `trusted_nodes` Configuration

When configuring the `persistent_peers` and `trusted_nodes` settings, we recommend using public IP addresses. This ensures that your node is connected to the correct public network and can communicate with other nodes effectively. Using private IP addresses can result in connectivity issues, as these addresses are not accessible outside your private network.

## How to Resolve Sync Issues for a Falling-Behind Validator

If your validator is falling behind the latest blocks and is currently syncing, follow these steps:

1. Open port `8545` on the sentry.
1. In the heimdall-config.toml file of the validator, replace it with http://ip:8545.
1. Check that the sentry RPC has the http API enabled in config.toml.
1. The validator must have the address of `0.0.0.0` and only listen to and from the validator.

   > Once the node has caught up with the latest blocks, please revert all the changes to the defaults.

If the sentry has also fallen behind the latest blocks, follow these additional steps:

1. Open the heimdall-config.toml file on the validator.
1. Change the value of the `bor_rpc_url` parameter to any one of the public endpoints listed [<ins>here</ins>](https://wiki.polygon.technology/).
1. Restart the services.

  > Once the node has caught up with the latest blocks, please revert all the changes to the defaults.

## How to Troubleshoot Errors with Heimdall Bridge Tasks

If you receive an error message similar to the following:

```bash
[0;94mINFO: 2023/02/24 09:25:12 amqp.go:326 Task not registered with this worker. Requeing message: {"UUID":"task_5c2d8983-89fa-42c1-a491-bacb682572b0","Name":"sendStakeUpdateToHeimdall","RoutingKey":"machinery_task","ETA":"2023-02-24T07:25:04.0895409Z","GroupUUID":"","GroupTaskCount":0,"Args":[{"Name":"","Type":"string","Value":"StakeUpdate"},{"Name":"","Type":"string","Value":"{\"address\":\"0xa59c847bd5ac0172ff4fe912c5d29e5a71a7512b\",\"topics\":[\"0x35af9eea1f0e7b300b0a14fae90139a072470e44daa3f14b5069bebbc1265bda\",\"0x0000000000000000000000000000000000000000000000000000000000000004\",\"0x0000000000000000000000000000000000000000000000000000000000000abd\",\"0x000000000000000000000000000000000000000000010693d2f1c350b752c130\"],\"data\":\"0x\",\"blockNumber\":\"0xfda81f\",\"transactionHash\":\"0xaa551dd79e0086aeee18e3e41207d2f0d9b3d1a8a09d885c794e7ba5939b410e\",\"transactionIndex\":\"0x65\",\"blockHash\":\"0x06ef6aad4402835be2d99968a26ac8e3d07a8f16351fba6c6c3f6808ead828d7\",\"logIndex\":\"0xe1\",\"removed\":false}"}],"Headers":{},"Priority":0,"Immutable":false,"RetryCount":2,"RetryTimeout":1,"OnSuccess":null,"OnError":null,"ChordCallback":null,"BrokerMessageGroupId":"","SQSReceiptHandle":"","StopTaskDeletionOnError":false,"IgnoreWhenTaskNotRegistered":false}[0m
```

It generally indicates that the Heimdall bridge is not properly up and running. Usually, the issue gets resolved in some time. However, if the problem persists, restarting the node can help resolve it.
