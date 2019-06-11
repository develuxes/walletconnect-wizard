import * as React from 'react';
import WalletConnect from '@walletconnect/browser';
import WalletConnectQrCode from './WalletConnectQrCode';
import MetaMaskConnectButton from './MetaMaskConnectButton';
import { SubHeading, Header, Row, Col, ButtonLink, HorizontalSeparator } from './theme';
import { WalletConnectLogo } from './images';

export interface ConnectWalletViewProps {
    walletConnector: WalletConnect | null | undefined;
    metaMaskAvailable: boolean;
    gotoInstallWalletView: () => void;
    handleMetaMaskConnect: () => void;
}
export default (props: ConnectWalletViewProps) => {
    const {
        walletConnector,
        metaMaskAvailable,
        handleMetaMaskConnect,
        gotoInstallWalletView,
    } = props;
    const onGotoInstallWalletView = (e: React.SyntheticEvent) => {
        e.preventDefault();
        gotoInstallWalletView();
    }

    return (
        <div>
            <Header>
                In order to use this service you need to have a compatible wallet{' '}
                application. The wallet securely stores and transfers your assets.
            </Header>
            <Row>
                <Col centered>
                    <SubHeading>Connect wallet</SubHeading>
                    {!!walletConnector && (
                        <div>
                            <WalletConnectQrCode
                                walletConnector={walletConnector}
                            />

                            <div>
                                <small>Powered by</small>{' '}
                                <WalletConnectLogo style={{ width: 120, marginBottom: -8 }} />
                            </div>
                
                        </div>
                    )}
                    
                    {(walletConnector && metaMaskAvailable) && (
                        <HorizontalSeparator>or</HorizontalSeparator>
                    )}
                    {metaMaskAvailable && (
                        <div>
                            <MetaMaskConnectButton
                                handleClick={handleMetaMaskConnect}
                            />
                        </div>
                    )}
                    <ButtonLink onClick={onGotoInstallWalletView}>
                        See compatible wallets
                    </ButtonLink>
                </Col>
                <Col centered>
                    <SubHeading>Install wallet</SubHeading>
                    <div>Big icon about connecting </div>
                    <ButtonLink onClick={onGotoInstallWalletView}>
                        See supported wallets
                    </ButtonLink>
                </Col>
            </Row>
        </div>
    )
}
