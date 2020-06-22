#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CustomVpcStack } from '../lib/custom_vpc-stack';
import { PrivateSubnetStack } from '../lib/private_subnet-stack';

const app = new cdk.App();

const vpcEntity = new CustomVpcStack(app, 'CustomVpcStack',{
    cidr: app.node.tryGetContext('cidr'),
});

//new PrivateSubnetStack(app,'private',{ vpc: vpcEntity.vpc });

