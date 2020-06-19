#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CustomVpcStack } from '../lib/custom_vpc-stack';

const app = new cdk.App();
new CustomVpcStack(app, 'CustomVpcStack');
