import React from 'react'



class ImgData extends React.Component
{
    
    render()
    {   
        console.log("img data")
        console.log(this.props.vase_detail)
        return (
            <div>
                <section>
                    <h4>Shape</h4>
                    <p>{this.props.vase_detail.shape}</p>
                </section>
                <section>
                    <h4>Location</h4>
                    <p>{this.props.vase_detail.location}</p>
                </section>
                <section>
                    <h4>Dimension</h4>
                    <p>{this.props.vase_detail.dimension}</p>
                </section>
                <section>
                    <h4>Plate</h4>
                    <p>{this.props.vase_detail.plate || 'NO INFORMATION FOUND'}</p>
                </section>
                <section>
                    <h4>Description</h4>
                    <p>{this.props.vase_detail.description}</p>
                </section>
                <section>
                    <h4>Additonal_info</h4>
                    <p>{this.props.vase_detail.additonal_info || 'NO INFORMATION FOUND'}</p>
                </section>
                <section>
                    <h4>Author</h4>
                    <p>Trendall</p>
                </section>
                <section>
                    <h4>Publication</h4>
                    <p>THE RED-FIGURED VASES OF PAESTUM</p>
                </section>
                
            </div>
          );
    }

}

export default ImgData;
