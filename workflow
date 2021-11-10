<mxfile host="app.diagrams.net" modified="2021-11-10T13:43:41.587Z" agent="5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36" etag="mOCU08hqr-PGS2DmfGlK" version="15.7.1" type="github" pages="2">
  <diagram id="RvtP6KzDnQ_t-uEAn6n8" name="Data model">
    <mxGraphModel dx="1422" dy="832" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="ZcPsWaDVoUloubT-qW47-1" value="Answer (ABS)" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="150" y="480" width="180" height="104" as="geometry" />
        </mxCell>
        <mxCell id="ZcPsWaDVoUloubT-qW47-6" value="+ time_created: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="ZcPsWaDVoUloubT-qW47-1" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="ZcPsWaDVoUloubT-qW47-12" value="+ client: Client" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="ZcPsWaDVoUloubT-qW47-1" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-13" value="+ question: Question" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="ZcPsWaDVoUloubT-qW47-1" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
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
          <mxGeometry x="350" y="330" width="180" height="130" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-23" value="+ id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-21" value="+ time_created: ISO" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-24" value="+ room: Room" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wgrCr-keq49Nrw7m1vkc-26" value="+ display_option: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wgrCr-keq49Nrw7m1vkc-17" vertex="1">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-1" value="NumericAnswer" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="350" y="480" width="180" height="52" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-2" value="+ value: float" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-1" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-7" value="+ type: &quot;numeric_answer&quot;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="1" vertex="1">
          <mxGeometry x="350" y="532" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-8" value="Client" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="350" y="600" width="180" height="130" as="geometry" />
        </mxCell>
        <mxCell id="8mfEV9iGwpjNu1JnS2Ye-9" value="+ id: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-8" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="mIrlX0P_sQC_-E1rDU4O-2" value="+ room: hash" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-8" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="QUUaMeVdqhNrXhWkeT5N-1" value="+ time_created: ISO" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-8" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="QUUaMeVdqhNrXhWkeT5N-2" value="+ time_last_action: ISO, None" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="8mfEV9iGwpjNu1JnS2Ye-8" vertex="1">
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
        <mxCell id="QUUaMeVdqhNrXhWkeT5N-5" value="Time of last client action (answer)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1">
          <mxGeometry x="540" y="704" width="210" height="30" as="geometry" />
        </mxCell>
        <mxCell id="QUUaMeVdqhNrXhWkeT5N-7" value="+ is_online: bool, false" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="1" vertex="1">
          <mxGeometry x="340" y="286" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="d3PaSWTB65MkGN5xYvDT-5" value="Cookies" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="860" y="130" width="410" height="104" as="geometry" />
        </mxCell>
        <mxCell id="d3PaSWTB65MkGN5xYvDT-6" value="+ [csrf_token]:  Token string, managed by Django CSRF middleware" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="d3PaSWTB65MkGN5xYvDT-5">
          <mxGeometry y="26" width="410" height="26" as="geometry" />
        </mxCell>
        <mxCell id="d3PaSWTB65MkGN5xYvDT-7" value="+ [access_token]: JWT access token, managed manually, data - client id" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="d3PaSWTB65MkGN5xYvDT-5">
          <mxGeometry y="52" width="410" height="26" as="geometry" />
        </mxCell>
        <mxCell id="d3PaSWTB65MkGN5xYvDT-8" value="+ [refresh_token]: JWT refresh token, managed manually, data - client id" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="d3PaSWTB65MkGN5xYvDT-5">
          <mxGeometry y="78" width="410" height="26" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
  <diagram id="hIYoJmG1eeO79YHHb3-3" name="Workflow">
    <mxGraphModel dx="2249" dy="2001" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-0" />
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-1" parent="-V1Edf5NTnPTbp8Rrcxs-0" />
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-2" target="-V1Edf5NTnPTbp8Rrcxs-5" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-13" value="Admin" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-8" vertex="1" connectable="0">
          <mxGeometry x="-0.4545" y="1" relative="1" as="geometry">
            <mxPoint x="5" y="1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-35" value="Public" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-2" target="-V1Edf5NTnPTbp8Rrcxs-9" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="230" y="230" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-2" value="Receive HTTP request" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="329" y="170" width="170" height="60" as="geometry" />
        </mxCell>
        <mxCell id="mg4DMWZPlkVg2WFhPXRj-0" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-5" target="-V1Edf5NTnPTbp8Rrcxs-28" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-5" value="Return Application (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="640" y="255" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-57" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-9" target="-V1Edf5NTnPTbp8Rrcxs-56" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-9" value="Return Application (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="30" y="250" width="150" height="30" as="geometry" />
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-0" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-15" target="JZ-35s0gDyDIr-xs9qdn-3" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-15" value="Connect client (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="30" y="487.5" width="150" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-19" value="Enter room" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="364" y="140" width="100" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-32" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-28" target="-V1Edf5NTnPTbp8Rrcxs-31" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-28" value="Get room, questions, answers (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="640" y="326.25" width="170" height="40" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-10" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-31" target="JZ-35s0gDyDIr-xs9qdn-9" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-31" value="Connect room event listener (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="640" y="415" width="170" height="40" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-40" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-41" target="-V1Edf5NTnPTbp8Rrcxs-42" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-41" value="Create new answer (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="10" y="800" width="180" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-61" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-42" target="-V1Edf5NTnPTbp8Rrcxs-60" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-42" value="&lt;b&gt;JWT Loop&lt;br&gt;&lt;/b&gt;Trigger room update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="10" y="880" width="180" height="65" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-43" value="Answer the question" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="32.5" y="770" width="125" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-51" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-110" y="-20" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-52" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-110" y="20" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-53" value="Application Public" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-70" y="20" width="130" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-54" value="Server" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-70" y="-18" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-1" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-56" target="ujyeqdWt2Hkhi3coi9pb-2" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="105" y="415" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-56" value="Request Client (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="30" y="325" width="150" height="32.5" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-60" value="Fetch room and answers (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="10" y="990" width="180" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Hhs-SAikMcBkrAGFT_Wn-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-65" target="-V1Edf5NTnPTbp8Rrcxs-83" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-65" value="Create questions (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="270" y="885" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-68" value="Create room" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="292.5" y="770" width="125" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Hhs-SAikMcBkrAGFT_Wn-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-80" target="-V1Edf5NTnPTbp8Rrcxs-65" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-80" value="Create room (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="270" y="800" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-83" value="Open room URL (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="270" y="990" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-96" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-100" target="-V1Edf5NTnPTbp8Rrcxs-125" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="945" y="255" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-97" value="Public" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-96" vertex="1" connectable="0">
          <mxGeometry x="-0.5368" y="2" relative="1" as="geometry">
            <mxPoint x="-21" y="-2" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-98" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-100" target="-V1Edf5NTnPTbp8Rrcxs-120" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="1405" y="240" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-99" value="Admin" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="-V1Edf5NTnPTbp8Rrcxs-98" vertex="1" connectable="0">
          <mxGeometry x="-0.4545" y="1" relative="1" as="geometry">
            <mxPoint x="34" y="1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-100" value="Receive disconnect event (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1060" y="190" width="220" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-106" value="Leave service&amp;nbsp;" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1120" y="160" width="100" height="30" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-24" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-120" target="-V1Edf5NTnPTbp8Rrcxs-122">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-120" value="Send disconnect event to clients&amp;nbsp;" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1315" y="252.5" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-122" value="Display disconnect" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="1315" y="323.75" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-128" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-125" target="-V1Edf5NTnPTbp8Rrcxs-127" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-125" value="Trigger room update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="865" y="255" width="160" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-127" value="Fetch room and all answers (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="865" y="323.75" width="160" height="40" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-154" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-133" target="-V1Edf5NTnPTbp8Rrcxs-135" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-133" value="Receive connect event (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="503" y="882.5" width="170" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-157" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-135" target="-V1Edf5NTnPTbp8Rrcxs-143" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-135" value="Send connect event to clients" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="499" y="990" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-138" value="Reconnect to service" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="503" y="767.81" width="135" height="30" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-143" value="Display connected" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="499" y="1070.62" width="180" height="35" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-156" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="-V1Edf5NTnPTbp8Rrcxs-155" target="-V1Edf5NTnPTbp8Rrcxs-133" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="-V1Edf5NTnPTbp8Rrcxs-155" value="... Enter service ..." style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="503" y="797.81" width="170" height="34.38" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-0" value="Fetch room and questions (HTTP)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="10" y="627.5" width="190" height="30" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="JZ-35s0gDyDIr-xs9qdn-3" target="JZ-35s0gDyDIr-xs9qdn-0" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-3" value="Trigger room update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="30" y="552.5" width="150" height="30" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-12" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="JZ-35s0gDyDIr-xs9qdn-9" target="JZ-35s0gDyDIr-xs9qdn-11" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-9" value="Trigger clients update (WS)" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="640" y="528.75" width="170" height="30" as="geometry" />
        </mxCell>
        <mxCell id="JZ-35s0gDyDIr-xs9qdn-11" value="Display connected" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="640" y="622.5" width="170" height="35" as="geometry" />
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-55" value="Invalid" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="F-uI4_-Zn1aKTncxfz2q-38" target="F-uI4_-Zn1aKTncxfz2q-54" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-5" value="Valid" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="F-uI4_-Zn1aKTncxfz2q-38" target="4CDPVZtjGaGk66oreW0J-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-38" value="Validate access JWT" style="rhombus;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-519.5" y="361.25" width="135" height="80" as="geometry" />
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-50" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#fff2cc;strokeColor=#d6b656;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-110" y="60" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-51" value="Application Admin" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-70" y="60" width="130" height="30" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-7" value="No" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="F-uI4_-Zn1aKTncxfz2q-54" target="4CDPVZtjGaGk66oreW0J-6">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="-99" y="401" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-11" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=0.5;entryDx=0;entryDy=0;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="F-uI4_-Zn1aKTncxfz2q-54" target="4CDPVZtjGaGk66oreW0J-4">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="-220" y="505" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-12" value="Yes" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="4CDPVZtjGaGk66oreW0J-11">
          <mxGeometry x="-0.0534" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="F-uI4_-Zn1aKTncxfz2q-54" value="Refresh JWT found?" style="rhombus;whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-290" y="361.25" width="140" height="80" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="ujyeqdWt2Hkhi3coi9pb-2" target="-V1Edf5NTnPTbp8Rrcxs-15" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-2" value="&lt;b&gt;JWT Loop&lt;/b&gt;&lt;br&gt;Return client" style="whiteSpace=wrap;html=1;rounded=0;strokeColor=#b85450;fillColor=#f8cecc;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="30" y="393.75" width="150" height="61.25" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-6" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="ujyeqdWt2Hkhi3coi9pb-5" target="F-uI4_-Zn1aKTncxfz2q-38" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-5" value="" style="rounded=0;whiteSpace=wrap;html=1;align=left;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-512" y="285" width="120" height="36.25" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-8" value="" style="rounded=0;whiteSpace=wrap;html=1;align=left;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-350" y="680" width="120" height="36.25" as="geometry" />
        </mxCell>
        <mxCell id="ujyeqdWt2Hkhi3coi9pb-11" value="JWT Loop" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="-V1Edf5NTnPTbp8Rrcxs-1" vertex="1">
          <mxGeometry x="-510" y="250" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-15" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="4CDPVZtjGaGk66oreW0J-0" target="4CDPVZtjGaGk66oreW0J-13">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-0" value="Update last action" style="whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="-512" y="547.5" width="120" height="35" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-9" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="4CDPVZtjGaGk66oreW0J-4" target="4CDPVZtjGaGk66oreW0J-0">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-4" value="Retrieve Client" style="whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="-512" y="490" width="120" height="30" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-10" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="4CDPVZtjGaGk66oreW0J-6" target="4CDPVZtjGaGk66oreW0J-8">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-6" value="Create Client" style="whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="-159" y="490" width="120" height="27.5" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-16" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="4CDPVZtjGaGk66oreW0J-8" target="4CDPVZtjGaGk66oreW0J-14">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-8" value="Update last action" style="whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="-159" y="547.5" width="120" height="35" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-18" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="4CDPVZtjGaGk66oreW0J-13" target="ujyeqdWt2Hkhi3coi9pb-8">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="-289.9999999999998" y="700" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-13" value="Refresh JWT" style="whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="-512" y="610" width="120" height="35" as="geometry" />
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-19" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;" edge="1" parent="-V1Edf5NTnPTbp8Rrcxs-1" source="4CDPVZtjGaGk66oreW0J-14" target="ujyeqdWt2Hkhi3coi9pb-8">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="-290.0000000000002" y="700" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="4CDPVZtjGaGk66oreW0J-14" value="Set JWT" style="whiteSpace=wrap;html=1;strokeColor=#b85450;fillColor=#f8cecc;" vertex="1" parent="-V1Edf5NTnPTbp8Rrcxs-1">
          <mxGeometry x="-159" y="610" width="120" height="35" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
