<mxfile host="app.diagrams.net" modified="2021-11-10T13:56:24.917Z" agent="5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36" etag="MIGb_ZWj_HaXn40fXElM" version="15.7.1" type="github" pages="2">
  <diagram id="RvtP6KzDnQ_t-uEAn6n8" name="Data model">
    <mxGraphModel dx="1422" dy="832" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="ZcPsWaDVoUloubT-qW47-1" value="Answer (ABS)" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="140" y="500" width="180" height="130" as="geometry" />
        </mxCell>
        <mxCell id="ZcPsWaDVoUloubT-qW47-6" value="+ id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="ZcPsWaDVoUloubT-qW47-1" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="ZcPsWaDVoUloubT-qW47-12" value="+ client: Client" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="ZcPsWaDVoUloubT-qW47-1" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-13" value="+ question: Question" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="ZcPsWaDVoUloubT-qW47-1" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="zQek49DnspP5eh2geyGn-3" value="+ time_created: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="ZcPsWaDVoUloubT-qW47-1">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-3" value="Room" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="340" y="130" width="180" height="130" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-10" value="+ id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-3" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-8" value="+ time_created: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-3" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-11" value="+ time_updated: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-3" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-18" value="+ use_color: Bool, true" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-3" vertex="1">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-17" value="Question" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="340" y="320" width="180" height="156" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-23" value="+ id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-21" value="+ time_created: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-24" value="+ room: Room" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-26" value="+ display_option: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="zQek49DnspP5eh2geyGn-4" value="+ value: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wgrCr-keq49Nrw7m1vkc-17">
          <mxGeometry y="130" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-1" value="NumericAnswer" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="340" y="500" width="180" height="52" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-2" value="+ value: float" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-1" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-7" value="+ type: &quot;numeric_answer&quot;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="1" vertex="1">
          <mxGeometry x="340" y="552" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-8" value="Client" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="340" y="640" width="180" height="130" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-9" value="+ id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-8" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-2" value="+ room: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-8" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="zQek49DnspP5eh2geyGn-1" value="+ time_created: ISO" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="8mfEV9iGwpjNu1JnS2Ye-8">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="zQek49DnspP5eh2geyGn-2" value="+ time_destroyed: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="8mfEV9iGwpjNu1JnS2Ye-8">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-14" value="+ online_counter: int, 0" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="1" vertex="1">
          <mxGeometry x="340" y="260" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-3" value="Export Format" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="580" y="130" width="230" height="156" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-4" value="+ question_id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="mIrlX0P_sQC_-E1rDU4O-3" vertex="1">
          <mxGeometry y="26" width="230" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-5" value="+ question_value: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="mIrlX0P_sQC_-E1rDU4O-3" vertex="1">
          <mxGeometry y="52" width="230" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-6" value="+ answer_type: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="mIrlX0P_sQC_-E1rDU4O-3" vertex="1">
          <mxGeometry y="78" width="230" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-7" value="+ answer_value: any" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="mIrlX0P_sQC_-E1rDU4O-3" vertex="1">
          <mxGeometry y="104" width="230" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-8" value="+ answer_time_created: ISO" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="mIrlX0P_sQC_-E1rDU4O-3" vertex="1">
          <mxGeometry y="130" width="230" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-10" value="Data export (CSV)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1">
          <mxGeometry x="580" y="90" width="120" height="30" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-11" value="Database models" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1">
          <mxGeometry x="340" y="90" width="110" height="30" as="geometry" />
        </mxCell>
        <mxCell id="zQek49DnspP5eh2geyGn-5" value="+ is_online: bool" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="1">
          <mxGeometry x="340" y="280" width="180" height="26" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
  <diagram id="hIYoJmG1eeO79YHHb3-3" name="Workflow">
    <mxGraphModel dx="1422" dy="832" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-0" />
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-1" parent="-V1Edf5NTnPTbp8Rrcxs-0" />
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-7" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-2" target="-V1Edf5NTnPTbp8Rrcxs-9" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="230" y="280" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-14" value="Public" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-7" vertex="1" connectable="0">
          <mxGeometry x="-0.5368" y="2" relative="1" as="geometry">
            <mxPoint x="-21" y="-2" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-2" target="-V1Edf5NTnPTbp8Rrcxs-5" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-13" value="Admin" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-8" vertex="1" connectable="0">
          <mxGeometry x="-0.4545" y="1" relative="1" as="geometry">
            <mxPoint x="5" y="1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-2" value="Receive HTTP request" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="360" y="200" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="mg4DMWZPlkVg2WFhPXRj-0" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-5" target="-V1Edf5NTnPTbp8Rrcxs-28" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-5" value="Return Application (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="620" y="265" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-57" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-9" target="-V1Edf5NTnPTbp8Rrcxs-56" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-9" value="Return Application (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="265" width="210" height="30" as="geometry" />
        </mxCell>
        <mxCell id="ub7LfzPj34AY_6SSHXeI-2" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-15" target="JZ-35s0gDyDIr-xs9qdn-14">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-15" value="Bind client (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="395" width="210" height="25" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-19" value="Enter service&amp;nbsp;" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="360" y="170" width="100" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-32" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-28" target="-V1Edf5NTnPTbp8Rrcxs-31" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-28" value="Get room, questions, answers (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="620" y="330" width="170" height="40" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-10" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-31" target="JZ-35s0gDyDIr-xs9qdn-9" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-31" value="Connect room event listener (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="620" y="395" width="170" height="40" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-40" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-41" target="-V1Edf5NTnPTbp8Rrcxs-42" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-41" value="Create new answer (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="780" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-61" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-42" target="-V1Edf5NTnPTbp8Rrcxs-60" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-42" value="Trigger room update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="850" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-43" value="Answer the question" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="142.5" y="750" width="125" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-51" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="20" y="90" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-52" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="20" y="130" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-53" value="Application public" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="60" y="130" width="130" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-54" value="Server" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="60" y="92" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-58" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-56" target="-V1Edf5NTnPTbp8Rrcxs-15" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-56" value="Create new Client (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="335" width="210" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-60" value="Fetch room and answers (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="930" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Hhs-SAikMcBkrAGFT_Wn-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-65" target="-V1Edf5NTnPTbp8Rrcxs-83" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-65" value="Create questions (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="440" y="860" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-68" value="Create room" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="462.5" y="755" width="125" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Hhs-SAikMcBkrAGFT_Wn-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-80" target="-V1Edf5NTnPTbp8Rrcxs-65" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-80" value="Create room (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="440" y="785" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-83" value="Open room URL (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="440" y="930" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-96" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-100" target="-V1Edf5NTnPTbp8Rrcxs-104" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="930" y="300" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-97" value="Public" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-96" vertex="1" connectable="0">
          <mxGeometry x="-0.5368" y="2" relative="1" as="geometry">
            <mxPoint x="-21" y="-2" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-98" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-100" target="-V1Edf5NTnPTbp8Rrcxs-102" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-99" value="Admin" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-98" vertex="1" connectable="0">
          <mxGeometry x="-0.4545" y="1" relative="1" as="geometry">
            <mxPoint x="34" y="1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-100" value="Close page" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1060" y="190" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-153" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-102" target="-V1Edf5NTnPTbp8Rrcxs-120" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="1425" y="365" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-102" value="Receive disconnect event (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1335" y="285" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-103" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-104" target="-V1Edf5NTnPTbp8Rrcxs-111" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-104" value="Receive disconnect event (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="860" y="285" width="180" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-106" value="Leave service&amp;nbsp;" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1060" y="160" width="100" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-126" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-111" target="-V1Edf5NTnPTbp8Rrcxs-125" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-111" value="Mark client as destroyed" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="860" y="365" width="180" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-123" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-120" target="-V1Edf5NTnPTbp8Rrcxs-122" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-120" value="Send disconnect event to clients&amp;nbsp;" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1335" y="365" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-122" value="Display disconnect" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1335" y="578.75" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-128" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-125" target="-V1Edf5NTnPTbp8Rrcxs-127" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-125" value="Trigger room update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="860" y="437.5" width="180" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-127" value="Fetch room and all answers (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="860" y="576.25" width="180" height="40" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-154" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-133" target="-V1Edf5NTnPTbp8Rrcxs-135" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-133" value="Receive connect event (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1620" y="285" width="170" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-157" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-135" target="-V1Edf5NTnPTbp8Rrcxs-143" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-135" value="Send connect event to clients" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1620" y="365" width="170" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-138" value="Reconnect to service (Admin only)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1641.5" y="160" width="135" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-143" value="Display connected" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1620" y="578.75" width="170" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-156" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-155" target="-V1Edf5NTnPTbp8Rrcxs-133" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-155" value="... Enter service ..." style="rounded=0;whiteSpace=wrap;html=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1620" y="210" width="170" height="35" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-0" value="Fetch room and questions (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="125" y="580" width="205" height="30" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="JZ-35s0gDyDIr-xs9qdn-3" target="JZ-35s0gDyDIr-xs9qdn-0" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-3" value="Trigger room update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="520" width="210" height="30" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-12" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="JZ-35s0gDyDIr-xs9qdn-9" target="JZ-35s0gDyDIr-xs9qdn-11" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-9" value="Trigger clients update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="620" y="467.5" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-11" value="Display connected" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="620" y="580" width="170" height="32.5" as="geometry" />
        </mxCell>
        <mxCell id="ub7LfzPj34AY_6SSHXeI-3" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="JZ-35s0gDyDIr-xs9qdn-14" target="JZ-35s0gDyDIr-xs9qdn-3">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-14" value="Send client Id (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="120" y="457.5" width="210" height="30" as="geometry" />
        </mxCell>
        <mxCell id="ub7LfzPj34AY_6SSHXeI-0" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="20" y="170" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="ub7LfzPj34AY_6SSHXeI-1" value="Application admin" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="60" y="170" width="100" height="30" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
