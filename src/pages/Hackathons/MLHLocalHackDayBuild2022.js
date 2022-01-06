import ReactTooltip from "react-tooltip";
import Button from '../../components/elements/Button';
import GuildScreenshot from '../../assets/GuildSS.svg';

export default function MLHLocalHackDayBuild2022() {
  return (
    <div className="MLHLocalHackDayBuild2022-page">
      <div
        className="mlh-localhackday-build-2022-hero-section-wrapper content-center"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "4.8rem",
          paddingTop: "2.4rem",
          paddingBottom: "2.4rem",
        }}
      >
        <div className="hero-section-content-wrapper">
          <h1 className="hero-section-title" style={{ fontSize: "46px" }}>
            Happy New Year <span style={{ fontWeight: "500" }}>🥂</span> <br />
            <span style={{ color: "var(--h-pink)" }}>
              MLH LocalHackDay: Build
            </span>{" "}
            <br />
            is here.
          </h1>
          <p
            className="hero-section-description"
            style={{ fontSize: "18px", fontWeight: "600", marginTop: "0.4rem" }}
          >
            Hekors, It's time to ASSEMBLE!
          </p>
        </div>
        <img
          src="https://i2.wp.com/www.4ye.co.uk/wp-content/uploads/2014/09/avengers-gif_o_145258.gif?resize=500%2C268&ssl=1"
          alt="developer-image"
          style={{
            width: "540px",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <div className="steps-container content-center"></div>
      <div className="cta-card-wrapper gradient-bg"
            style={{
                padding: '1.8rem 2.4rem',
                backgroundColor: 'white',
                width: 'fit-content',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '2.4rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '2.4rem',
                borderRadius: '16px',
                boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2)'
            }}
        >
            <h4 className="cta-title" style={{ width: '40ch', color: 'var(--h-white)' }}>
                MLH LHD: Build is here, Get ready
            </h4>
            <div className="cta-buttons-wrapper" 
                style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1.2rem'
                }}>
                <Button
                  onClick={() => window.open('https://localhackday.mlh.io/build')}
                >Register for the Hackathon</Button>
                <span
                  data-for='hekors-guild-alert'
                  data-tip=''
                >
                  <Button type="plain"
                    onClick={() => window.open('https://discord.mlh.io')}
                  >
                    Join MLH Discord
                    <ReactTooltip id='hekors-guild-alert'>
                    <img
                      src={GuildScreenshot}
                      alt="developer-image"
                      style={{
                        width: "400px",
                        height: "auto",
                        borderRadius: "16px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                      }}
                    />
                      <h5>
                        Don't forget to select HEKORS as a Guild <br />
                        while joining the server
                      </h5>
                    </ReactTooltip>
                  </Button>
                </span>
            </div>
        </div>

    </div>
  );
}
